import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    // server: {
    //     host: 'https://bd39-103-107-161-80.ngrok-free.app',
    //     port: 5173, // Replace with your dev server port
    // },
});
