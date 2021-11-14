module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'amd': true,
    'node': true,
  },
  'extends': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ], 
  "ignorePatterns": [
    '**/*.js',
    '**/*.html',
  ],
  'rules': {
    '@typescript-eslint/no-var-requires': 1,
    'max-len': ["error", { "code": 120 }],
    "no-cond-assign": "error", 
    "no-console": "error", 
    "no-constant-condition": "error",
  },
};
