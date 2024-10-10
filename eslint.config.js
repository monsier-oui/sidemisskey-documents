import eslint from '@eslint/js'
import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import parserTypeScript from '@typescript-eslint/parser'
import configPrettier from 'eslint-config-prettier'
import pluginAstro from 'eslint-plugin-astro'
import pluginImport from 'eslint-plugin-import'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const tsConfig = tseslint.config(...tseslint.configs.recommended)

export default [
  { ignores: ['dist'] },
  ...tsConfig,
  eslint.configs.recommended,
  ...pluginAstro.configs.recommended,
  ...pluginAstro.configs['jsx-a11y-recommended'],
  configPrettier,
  {
    files: ['**/*.{js,jsx,ts,tsx,astro}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      import: pluginImport,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {},
      },
      'import/core-modules': ['astro:assets'],
    },
    rules: {
      ...pluginImport.configs['recommended'].rules,
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-named-as-default-member': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
]
