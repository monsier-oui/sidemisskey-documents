/** @type {import("prettier").Config} */

export default {
  singleQuote: true,
  jsxSingleQuote: false,
  semi: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
