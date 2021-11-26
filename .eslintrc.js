module.exports = {
  extends: [
    'ecubelabs',
    'react-app',
    // Put 'plugin:prettier/recommended' last.
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    // https://stackoverflow.com/a/59268871
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
