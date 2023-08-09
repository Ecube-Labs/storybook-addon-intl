module.exports = {
  extends: [
    'ecubelabs',
    'react-app',
    // Put 'plugin:prettier/recommended' last.
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['react'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    // https://stackoverflow.com/a/59268871
    'import/extensions': 'off',
  },
};
