import typescriptEslint from '@typescript-eslint/eslint-plugin';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/*'],
  },
  ...compat.extends('eslint:recommended', 'plugin:jest/recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      jest,
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
