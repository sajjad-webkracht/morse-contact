import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
    build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        notfound: '404.html',
        login: 'login.html',
        morse: 'morse.html',
      }
    }
  },
  plugins: [
    tailwindcss(),
  ], 
  server: {
    open: true,
  },
});