<div align="center">
  <img src="https://raw.githubusercontent.com/kyozApp/vscode-kyoz-snippets/main/images/logo.png" width="128" alt="Kyoz Snippets Logo">

# Kyoz Snippets Extension 🚀

  <p><b>Aumenta tu productividad con plantillas premium para el desarrollo moderno.</b></p>
  <p>Optimizado para arquitecturas utilizando Hono, Svelte 5 y Astro.</p>

[![Version](https://img.shields.io/badge/version-0.0.3-blue.svg)](package.json)
[![VS Code](https://img.shields.io/badge/platform-VS_Code-blueviolet.svg)](https://code.visualstudio.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

</div>

---

## ✨ Características Principales

- 💎 **Premium JSDoc**: Documentación profesional con iconos integrada en cada snippet.
- ⚡ **Svelte 5 Ready**: Plantillas actualizadas con soporte para **Runes** y Superforms.
- 🛠️ **Arquitectura Robusta**: Estructura de servidores Hono con Graceful Shutdown y validación Zod.
- 🛡️ **Tipado Estricto**: Diseñado al 100% para TypeScript.

---

## 📚 Catálogo de Snippets

### 🌍 General (Transversal)

| Prefijo          | Descripción                                              |
| :--------------- | :------------------------------------------------------- |
| `general-header` | Encabezado de archivo profesional con nombre automático. |
| `general-fn`     | Función universal (Sync/Async) con menú de selección.    |

### ⚡ Hono (Backend)

| Prefijo      | Descripción                                                     |
| :----------- | :-------------------------------------------------------------- |
| `hono-index` | Bootstrap completo con Graceful Shutdown y Healthcheck.         |
| `hono-env`   | Configuración de entorno validada con Zod (AduShared Style).    |
| `hono-crud`  | CRUD completo (GET, POST, PATCH, DELETE) con respuesta premium. |
| `hono-get`   | Endpoint individual GET con respuesta estandarizada.            |
| `hono-post`  | Endpoint individual POST con respuesta estandarizada.           |
| `hono-zod`   | Validador de rutas integrado con respuesta estandarizada.       |

### 🚀 Svelte & SvelteKit

| Prefijo                   | Descripción                                                    |
| :------------------------ | :------------------------------------------------------------- |
| `sveltekit-page`          | Página estándar con Runes (`$props()`).                        |
| `sveltekit-page-form`     | Formulario avanzado con Superforms y estados de carga.         |
| `sveltekit-server-page`   | Lógica de servidor (`load` y `actions`) con tipado automático. |
| `sveltekit-server-layout` | Lógica de servidor para layouts.                               |
| `sveltekit-api`           | Endpoints de API para archivos `+server.ts`.                   |

---

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/kyozApp/vscode-kyoz-snippets.git
   ```
2. Instala las dependencias con **pnpm**:
   ```bash
   pnpm install
   ```
3. Compila la extensión:
   ```bash
   pnpm build
   ```

## 🛠️ Uso

### 1. Snippets Manuales

Escribe los siguientes prefijos en tus archivos:

- **SvelteKit**: `sveltekit-page`, `sveltekit-server-page`, `sveltekit-api`, `sveltekit-layout`.
- **Hono**: `hono-index`, `hono-router`, `hono-crud`, `hono-env`, `hono-middleware`.
- **Astro**: `astro-page`.

### 2. Menú Contextual (NUEVO)

Haz clic derecho sobre cualquier carpeta en el explorador de archivos para ver las opciones de **Kyoz**:

- **SvelteKit**: Crea automáticamente `+page.svelte`, `+page.server.ts`, etc.
- **Hono**: Crea Routers y Middlewares rápidamente.
- **Astro**: Crea páginas `.astro`.

Simplemente abre un archivo soportado (`.ts`, `.js`, `.svelte`, `.astro`) y comienza a escribir los prefijos listados arriba. Presiona `Tab` o `Enter` para expandir el snippet.

---

<div align="center">
  <p>Desarrollado con ❤️ por <b>Kyoz</b></p>
</div>
