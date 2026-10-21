import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import vitest from '@vitest/eslint-plugin';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/*', 'docs-site/*'],
  },
  js.configs.recommended,
  {
    files: ['src/**/__tests__/**'],
    ...vitest.configs.recommended,
  },
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        require: 'readonly',
      },

      parser: tsParser,
    },

    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['src/**/*.ts'],
  },
];
