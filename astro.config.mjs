// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pavanpej.com',
  integrations: [tailwind(), react(), sitemap()],
  output: 'static',
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
          manualChunks: {
            // Avoid splitting react/react-dom—can break jsxDEV runtime. Keep map/font chunks.
            'map-vendor': ['leaflet', 'react-leaflet'],
            'fontawesome': ['@fortawesome/fontawesome-free'],
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