import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/goit-js-hw-09/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});

