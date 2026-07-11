import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// Prevent Vite from emptying the output directory before each build.
// This keeps previously-generated files in `docs/` intact.
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'Roland J-6 Companion',
        short_name: 'J-6 Companion',
        description: 'Companion app for the Roland J-6 Chord Synthesizer',
        theme_color: '#121212',
        background_color: '#121212',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}']
      }
    })
  ],
  build: {
    emptyOutDir: true,
    outDir: 'docs'
  },
  base: './'
});
