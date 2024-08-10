import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pidsoft/'  // Add this line if your GitHub Pages is served from a subpath
})
