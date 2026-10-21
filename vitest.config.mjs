import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/__tests__/**/*-test.ts'],
    environment: 'jsdom',
    // Run inside the jsdom window so `window instanceof Window` holds, as in a browser.
    pool: 'vmForks',
  },
});
