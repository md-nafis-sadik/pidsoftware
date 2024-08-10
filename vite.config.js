import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pidsoftware/',  // Change this to the name of your GitHub repo
  plugins: [react()],
});
