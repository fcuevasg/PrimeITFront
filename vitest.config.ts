import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/__tests__/**/*.spec.tsx'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/__tests__/setup/setup.ts'],
    reporters: 'dot',
  },
});
