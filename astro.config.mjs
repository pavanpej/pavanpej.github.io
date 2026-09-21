// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pavanpej.com',
  integrations: [react(), sitemap()],
  output: 'static',
  // Preserve whitespace between adjacent inline elements as in Astro 5.
  compressHTML: true,
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    resolve: {
      dedupe: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
    ssr: {
      external: ['svgo']
    },
    build: {
      // Optimize chunk size
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Avoid splitting react/react-dom—can break jsxDEV runtime. Keep map/font chunks.
            const path = id.replaceAll('\\', '/');
            if (/\/node_modules\/(?:leaflet|react-leaflet|@react-leaflet)\//.test(path)) {
              return 'map-vendor';
            }
            if (path.includes('/node_modules/@fortawesome/fontawesome-free/')) {
              return 'fontawesome';
            }
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