module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
};
