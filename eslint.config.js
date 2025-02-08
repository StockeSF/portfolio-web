import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import neostandard from 'neostandard'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.recommended,
  ...neostandard(),
  eslintPluginPrettierRecommended,
  ...eslintPluginAstro.configs.recommended,
  pluginJs.configs.recommended,
  { files: ['**/*.{js,mjs,cjs,ts,astro}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        NodeJS: true,
        NodeListOf: true,
      },
    },
  },
  {
    ignores: ['.astro/**/*.*'],
    files: ['**/*.astro', '**/*.js', '**/*.jsx'],
    rules: {
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/jsx-indent': 'off',
      '@stylistic/space-before-function-paren': 'off',
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'react/self-closing-comp': 'off',
      'react/jsx-key': 'off',
      '@stylistic/jsx-first-prop-new-line': 'off',
      '@stylistic/jsx-closing-tag-location': 'off',
      '@stylistic/jsx-closing-bracket-location': 'off',
      '@stylistic/multiline-ternary': 'off',
    },
  },
]
