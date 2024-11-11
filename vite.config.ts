import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    strictPort: false,
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    outDir: 'dist/client',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    sourcemap: false,
    emptyOutDir: true
  },
  ssr: {
    noExternal: ['react-router-dom']
  },
  optimizeDeps: {
    include: ['react-router-dom']
  }
});