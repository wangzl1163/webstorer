module.exports = {
   env: {
      browser: true,
      node: true,
      es2021: true,
      commonjs: true
   },
   extends: [
      'standard'
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
   },
   plugins: [
      '@typescript-eslint',
      'eslint-plugin-import',
      'eslint-plugin-promise',
      'eslint-plugin-node'
   ],
   rules: {
      indent: ['error', 3],
      'no-tabs': ['error', { allowIndentationTabs: true }],
      'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }]
   }
}
