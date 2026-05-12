import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    
    const readSnippetBody = async (snippetFile: string, snippetKey: string): Promise<string[]> => {
        try {
            const snippetsPath = path.join(context.extensionPath, 'snippets', snippetFile);
            const snippetsRaw = fs.readFileSync(snippetsPath, 'utf8');
            const snippets = JSON.parse(snippetsRaw);

            if (!snippets[snippetKey]) {
                throw new Error(`Snippet "${snippetKey}" no encontrado en ${snippetFile}`);
            }
            return snippets[snippetKey].body;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const registerFileCommand = (commandId: string, defaultFilename: string, snippetKey: string, snippetFile: string) => {
        let disposable = vscode.commands.registerCommand(commandId, async (uri: vscode.Uri) => {
            if (!uri) {
                vscode.window.showErrorMessage('Por favor, usa el menú contextual sobre una carpeta.');
                return;
            }

            try {
                const mainBody = await readSnippetBody(snippetFile, snippetKey);
                let mainText = mainBody.join('\n');

                // 1. Limpiar nombre de variable base para consistencia
                const baseName = defaultFilename.split('.')[0];
                mainText = mainText.replace(/\$\{1:router\}/g, `\${1:${baseName}}`);
                mainText = mainText.replace(/\$\{1:functionName\}/g, `\${1:${baseName}}`);

                const fileUri = vscode.Uri.joinPath(uri, defaultFilename);
                await vscode.workspace.fs.writeFile(fileUri, new Uint8Array());
                
                const doc = await vscode.workspace.openTextDocument(fileUri);
                const editor = await vscode.window.showTextDocument(doc);
                
                await editor.insertSnippet(new vscode.SnippetString(mainText));
            } catch (error) {
                vscode.window.showErrorMessage(`Error creando archivo: ${error}`);
            }
        });
        context.subscriptions.push(disposable);
    };

    // SvelteKit
    registerFileCommand('kyoz-snippets.newSvelteKitPage', '+page.svelte', 'SvelteKit: +page.svelte (Runes)', 'sveltekit.json');
    registerFileCommand('kyoz-snippets.newSvelteKitServerPage', '+page.server.ts', 'SvelteKit: +page.server.ts', 'sveltekit.json');
    registerFileCommand('kyoz-snippets.newSvelteKitAPI', '+server.ts', 'SvelteKit: +server.ts (API Endpoints)', 'sveltekit.json');
    registerFileCommand('kyoz-snippets.newSvelteKitLayout', '+layout.svelte', 'SvelteKit: +layout.svelte', 'sveltekit.json');

    // Hono
    registerFileCommand('kyoz-snippets.newHonoRouter', 'router.ts', 'Hono: Router Básico', 'hono.json');
    registerFileCommand('kyoz-snippets.newHonoCRUD', 'router.ts', 'Hono: CRUD Completo', 'hono.json');
    registerFileCommand('kyoz-snippets.newHonoMiddleware', 'middleware.ts', 'Hono: Middleware', 'hono.json');

    // Astro
    registerFileCommand('kyoz-snippets.newAstroPage', 'index.astro', 'Astro: Page Template', 'astro.json');
}

export function deactivate() {}
