# Guía de Desarrollo - Kyoz Snippets 🛠️

Este documento describe el proceso de creación, configuración y publicación de la extensión.

---

## 🏗️ 1. Proceso de Creación (Desde Cero)

Pasos seguidos para inicializar este proyecto:

1. **Crear Carpeta del Proyecto**:

   ```bash
   mkdir vscode-kyoz-snippets
   cd vscode-kyoz-snippets
   ```

2. **Inicializar Node Project**:

   ```bash
   npm init -y
   ```

3. **Estructura de Directorios**:
   - Crear carpeta `snippets/` para los archivos JSON.
   - Crear carpeta `images/` para el logo.

4. **Configurar `package.json`**:
   - Registrar cada archivo JSON en `contributes.snippets`.
   - Añadir metadatos (publisher, icon, repository, etc.).

---

## 💻 2. Flujo de Trabajo Local

### Clonar y Configurar

```bash
git clone https://github.com/kyozApp/vscode-kyoz-snippets.git
cd vscode-kyoz-snippets
npm i
```

### Empaquetado para Pruebas

```bash
npx @vscode/vsce package
```

### Instalación Manual

1. Ve a la vista de **Extensiones** (`Ctrl+Shift+X`).
2. Menú de tres puntos (`...`) -> **Install from VSIX...**.
3. Selecciona el archivo `.vsix` generado.

---

## 🚀 3. Flujo de Producción (Prod)

### 1. Crear un Token de Acceso (PAT)

1. Ve a [Azure DevOps](https://dev.azure.com/).
2. En **Personal Access Tokens**, crea uno nuevo.
3. Asegúrate de que tenga el scope `Marketplace (Publish)`.

### 2. Iniciar Sesión

Utiliza tu ID de publisher:

```bash
npx @vscode/vsce login kyoz
```

### 3. Publicar/Actualizar Versión

Para publicar una nueva versión (ej. un parche):

```bash
npx @vscode/vsce publish patch
```

---

<div align="center">
  <p>Mantén este documento actualizado con cualquier cambio en el flujo de construcción.</p>
</div>
