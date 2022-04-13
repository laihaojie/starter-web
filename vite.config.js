import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    root: process.cwd(),
    server: {
        host: "0.0.0.0",
        port: 7125
    },
    build: {
        brotliSize: false,
    },
})