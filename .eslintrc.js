module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        'plugin:prettier/recommended',
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
      'semi': ['error', 'never'],
      'block-scoped-var': 'error',
      'no-await-in-loop': 'error',
      'no-console': 'off',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-duplicate-imports': 'error',
      'no-multi-spaces': 'error',
      'no-return-await': "error",
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'object-curly-spacing': ['error', 'always'],
      'require-await': 'error',
      'space-infix-ops': 'error',
      'yoda': 'error'
    }
}
