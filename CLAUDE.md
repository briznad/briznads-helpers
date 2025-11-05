# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`briznads-helpers` is a TypeScript utility library providing generic, zero-dependency helper functions and types for TypeScript projects. The package exports compiled JavaScript with TypeScript declarations.

## Key Commands

### Build
```bash
npm run build       # Compile TypeScript to JavaScript
npm run clean       # Remove dist directory
```

### Linting
```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

### Publishing
```bash
npm run npm_publish # Build and publish to npm
```

## Architecture

### Dual Module Format Build System

The project compiles to **both ESM and CommonJS** formats for maximum compatibility:

- **ESM output**: `dist/esm/` (configured in `tsconfig-esm.json`)
  - `module: "esnext"`, `target: "ES2022"`
  - For modern bundlers and Node.js ESM imports

- **CommonJS output**: `dist/cjs/` (configured in `tsconfig-cjs.json`)
  - `module: "commonjs"`, `target: "ES2015"`
  - For Node.js require() and tools like Jest

Both extend `tsconfig-base.json` for shared configuration.

After TypeScript compilation, `set_module_type.sh` creates `package.json` files in each output directory setting the appropriate `"type"` field (`"module"` or `"commonjs"`).

### Export Pattern

All functions use **default exports** and are re-exported from `src/index.ts` with `.js` extensions in import paths (required for ESM compatibility).

Example function structure:
```typescript
// Internal imports use .js extensions
import { default as listify } from './listify.js';

export default function myFunction(...) {
  // implementation
}
```

The main `index.ts` exports both types and functions, with types exported first.

### Code Organization

- `src/` - All source files (functions and types)
- `src/types/` - TypeScript type definitions
  - `basics.ts` - Common type aliases (AnyMap, BooleanMap, etc.)
  - `emptyOpts.ts` - Options for empty checking
  - `valueOf.ts` - ValueOf utility type

Core utilities include:
- **Query** class: Complex object/list filtering with regex support
- **smartSort**: Flexible sorting with nested path support
- **get**: Safe nested property access (path-based alternative to optional chaining)
- Helper functions for dates, arrays, objects, validation, etc.

### Code Style (ESLint)

- **Indentation**: Tabs (not spaces)
- **Template literals**: Space inside curly braces (`${ var }`)
- **Semicolons**: Required
- **Key spacing**: Aligned colons in object literals
- **Import order**: Types, external, internal with newlines between
- Allows empty arrow functions and constructors
- TypeScript `any` is permitted
