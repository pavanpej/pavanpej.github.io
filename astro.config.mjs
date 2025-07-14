// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://pavanpej.com',
  integrations: [tailwind(), react()],
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      external: ['svgo']
    },
    build: {
      // Optimize chunk size
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate React and map libraries into their own chunks
            'react-vendor': ['react', 'react-dom'],
            'map-vendor': ['leaflet', 'react-leaflet'],
            'fontawesome': ['@fortawesome/fontawesome-free']
          }
        }
      },
      // Enable minification
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false, // Keep console.error for debugging
          drop_debugger: true
        }
      }
    },
    // Optimize CSS
    css: {
      devSourcemap: false
    }
  },
  trailingSlash: 'never'
});