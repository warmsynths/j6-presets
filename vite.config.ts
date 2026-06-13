import { defineConfig } from 'vite';

// Prevent Vite from emptying the output directory before each build.
// This keeps previously-generated files in `docs/` intact.
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: 'docs'
  },
  base: './'
});
