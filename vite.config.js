import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: 'src', // Set the project root to the src folder
  base: '/', // Ensure base path is set
  server: {
    open: '/en/index.html' // Open English page by default
  },
  build: {
    outDir: '../dist', // Output to the real root's dist folder
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'src/index.html'),
        'en-index': resolve(__dirname, 'src/en/index.html'),
        'en-cabins': resolve(__dirname, 'src/en/cabins.html'),
        'es-index': resolve(__dirname, 'src/es/index.html'),
        'es-cabins': resolve(__dirname, 'src/es/cabins.html'),
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
});
