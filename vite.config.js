import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { deckPlugin, tailwindPlugin } from '@deckio/deck-engine/vite'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/deckio-digital-security/' : '/',
  plugins: [
    react({
      include: [/\.[jt]sx?$/, /node_modules\/@deckio\/deck-engine\/.+\.jsx$/],
    }),
    deckPlugin(),
    tailwindPlugin(),
  ],
  server: {
    fs: {
      allow: ['..', '../..'],
    },
  },
})
