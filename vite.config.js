import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        port: 7125
    },
    build: {
        brotliSize: false,
    },
})