# Guía de Desarrollo - Kyoz Snippets 🛠️

Este documento describe cómo configurar el entorno de desarrollo, empaquetar y publicar la extensión.

---

## 💻 Flujo de Desarrollo (Dev)

### 1. Clonar el repositorio

```bash
git clone https://github.com/kyozApp/kyoz-snippets.git
cd kyoz-snippets
```

### 2. Instalación de dependencias

```bash
npm install
```

### 3. Empaquetado Local

Genera el archivo `.vsix` para pruebas:

```bash
npx @vscode/vsce package
```

### 4. Instalación del `.vsix`

Para probar la extensión localmente:

1. Ve a la vista de **Extensiones** (`Ctrl+Shift+X`).
2. Haz clic en el menú de los tres puntos (`...`) en la parte superior.
3. Selecciona **Install from VSIX...**.
4. Elige el archivo `kyoz-snippets-x.x.x.vsix` generado.

---

## 🚀 Flujo de Producción (Prod)

### 1. Crear un Token de Acceso (PAT)

1. Ve a [Azure DevOps](https://dev.azure.com/).
2. En **Personal Access Tokens**, crea uno nuevo con el scope `Marketplace (Publish)`.

### 2. Iniciar Sesión

```bash
npx @vscode/vsce login kyoz
# Pega tu PAT cuando se te solicite
```

### 3. Publicar la Extensión

```bash
npx @vscode/vsce publish
```

### 4. Incrementar Versión

```bash
npx @vscode/vsce publish patch
```
