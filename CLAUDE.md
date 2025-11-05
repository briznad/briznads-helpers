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

### Modern ESM Package

The project uses a **modern ESM-only build** targeting ES2022:

- Source: `src/` (TypeScript)
- Output: `dist/` (JavaScript + type declarations)
- Configuration: `tsconfig.json` with `moduleResolution: "bundler"`
- Package type: `"module"` (pure ESM)

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
