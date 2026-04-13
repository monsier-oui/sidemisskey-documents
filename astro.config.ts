import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.side.misskey.productions',
  server: {
    host: true,
  },
  vite: {
    plugins: [tailwindcss()] as never,
  },
  integrations: [react()],
})
