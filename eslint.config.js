import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'unused-vars':  "warn",
      'no-useless-constructor': 'off',
      'no-empty': 'off',
      camelcase: 'off',
      'no-undef': 'warn',
    },
  },
  tseslint.configs.recommended,
]);
