import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
      host:'172.31.10.11',
      port:8010
  },
  esbuild: false,
    
})
