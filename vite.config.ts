import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // host: true deja abrir la web desde el móvil por la red local (ver README)
  server: { host: true },
})
