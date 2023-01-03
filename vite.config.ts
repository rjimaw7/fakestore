import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export const aliases = {
  '@assets': resolve(__dirname, './src/assets'),
  '@layouts': resolve(__dirname, './src/layouts'),
  '@components': resolve(__dirname, './src/components'),
  '@pages': resolve(__dirname, './src/pages'),
  '@shared': resolve(__dirname, './src/shared'),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: aliases },
});
