import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  base: '/goit-js-hw-09/',
  root: 'src',
  build: {
    sourcemap: true,
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames(chunkInfo) {
          return '[name].js';
        },
        assetFileNames(assetInfo) {
          if (assetInfo.name && assetInfo.name.endsWith('.html')) {
            return '[name].[ext]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
    SortCss({
      sort: 'mobile-first',
    }),
  ],
  optimizeDeps: {
    include: ['simplelightbox'],
  },
});

