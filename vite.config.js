import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-special-place/', // Hier kommt später der Name deines GitHub Repositories hin
  server: {
    host: true,
    port: 5173,
  }
})