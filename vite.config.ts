import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '*.module.css': './global.d.ts',
      app: '/src/app',
      assets: '/src/assets',
      pages: '/src/pages',
      shared: '/src/shared',
    },
  },
});
