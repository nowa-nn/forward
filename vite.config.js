import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        v2: resolve(__dirname, 'v2/index.html'),
        v3: resolve(__dirname, 'v3/index.html')
      }
    }
  },
  server: {
    port: 3000,
    open: false,
    watch: {
      usePolling: true
    }
  }
});
