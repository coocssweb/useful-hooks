module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9, // ES9 === ES2018
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    },
  },
  settings: {
    settings: {
      'import/extensions': ['.ts', '.tsx'],
    },
  },
  plugins: ['prettier', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'value-list-comma-newline-after': 0,
    'prefer-promise-reject-errors': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/no-unresolved': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
    'max-lines': [
      2,
      {
        max: 1000,
      },
    ],
  },
};
