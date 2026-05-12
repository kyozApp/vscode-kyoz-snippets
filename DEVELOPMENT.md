# Guía de Desarrollo - Kyoz Snippets 🛠️ (v0.1.0)

Este documento detalla el ciclo de vida completo de la extensión, desde su creación inicial hasta la publicación en el Marketplace.

---

## 🏗️ 1. Proceso de Creación (Desde Cero)

Si necesitas recrear este proyecto desde una carpeta vacía, estos son los pasos:

1. **Inicializar Proyecto Node**:
   ```bash
   mkdir vscode-kyoz-snippets && cd vscode-kyoz-snippets
   pnpm init
   ```

2. **Instalar Dependencias de Desarrollo**:
   ```bash
   pnpm add -D typescript @types/vscode@1.107.0 @types/node esbuild @vscode/vsce
   ```

3. **Inicializar TypeScript**:
   ```bash
   pnpm dlx tsc --init
   ```
   *(Luego configurar el `tsconfig.json` con `rootDir: "src"` y `outDir: "out"`)*.

4. **Estructura de Carpetas**:
   ```bash
   mkdir src snippets images
   ```

5. **Configurar Menús en `package.json`**:
   Registrar los `contributes.submenus` y `contributes.commands` para habilitar el clic derecho.

---

## 💻 2. Flujo de Trabajo Local (Desarrollo)

Para probar cambios de forma rápida en tu propia máquina:

1. **Instalar dependencias**: `pnpm install`.
2. **Lanzar Compilador (Watch)**: Ejecuta `pnpm watch`. Esto vigila tus cambios en `src/extension.ts` y los traduce a `out/extension.js` al instante.
3. **Lanzar ventana de prueba**: Presiona `F5` en VS Code. Se abrirá una ventana limpia donde podrás probar el menú contextual.

---

## 📦 3. Empaquetado y Producción (VSIX)

> [!IMPORTANT]
> **ORDEN CRÍTICO**: Nunca ejecutes el empaquetado sin haber compilado primero. Si lo haces, el archivo `.vsix` irá vacío o con código antiguo.

### Paso A: Preparar para Producción
```bash
pnpm build
```
*Esto genera una versión minificada y optimizada de tu código en la carpeta `out/`.*

### Paso B: Generar el archivo .vsix
```bash
pnpm package
```
*Este comando usa la herramienta oficial `@vscode/vsce` instalada localmente.*

---

## 🚀 4. Publicación en el Marketplace (Prod)

### 1. Gestión de Identidad
1. Obtén tu **PAT (Personal Access Token)** en [Azure DevOps](https://dev.azure.com/).
2. Scope requerido: `Marketplace (Publish)`.
3. Inicia sesión en tu terminal:
   ```bash
   pnpm exec vsce login kyoz
   ```

### 2. Publicar Nueva Versión
Cada vez que hagas un cambio importante, incrementa la versión y publica:
```bash
# Sube la versión y publica de un solo golpe
pnpm publish patch
```

---

<div align="center">
  <p>Mantén este documento actualizado. Última actualización: 12/05/2026</p>
</div>
