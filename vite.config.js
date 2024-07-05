// vite.config.js
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    plugins: [
        legacy({
            targets: ['ie >= 6'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ]
});
