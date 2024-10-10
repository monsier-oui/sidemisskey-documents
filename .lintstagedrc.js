export default {
  '*.css': ['prettier --write'],
  '*.astro': ['prettier --write', 'eslint --fix', 'astro check'],
  '*.{js,cjs,ts,tsx}': ['prettier --write', 'eslint --fix'],
}
