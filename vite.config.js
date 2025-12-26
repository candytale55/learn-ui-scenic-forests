import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', // Set the project root to the src folder
  build: {
    outDir: '../dist', // Output to the real root's dist folder
    rollupOptions: {
      input: {
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
