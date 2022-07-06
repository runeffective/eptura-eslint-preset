const jsOnly = require('./js-only');

module.exports = {
  configs: {
    jsOnly: jsOnly,
    recommended: {
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb'],
      rules: {
        ...jsOnly.rules,
        indent: 'off',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            'accessibility': 'explicit',
            'overrides': {'constructors': 'no-public'}
          }
        ],
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            'multiline': {
              'delimiter': 'semi',
              'requireLast': true
            },
            'singleline': {
              'delimiter': 'semi',
              'requireLast': false
            }
          }
        ],
        '@typescript-eslint/member-ordering': [
          'error',
          {
            'default': [
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'public-static-field',
              'protected-static-field',
              'private-static-field',

              'public-abstract-field',
              'private-abstract-field',
              'protected-abstract-field',

              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',

              'public-constructor',
              'protected-constructor',
              'private-constructor',

              'public-abstract-method',
              'protected-abstract-method',
              'private-abstract-method',

              'public-instance-method',
              'protected-instance-method',
              'private-instance-method'
            ]
          }
        ],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/quotes': ['error', 'single', {'allowTemplateLiterals': true, 'avoidEscape': true}],
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unbound-method': ['error', {'ignoreStatic': true}],
        '@typescript-eslint/unified-signatures': 'error',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'max-len': ['error', { 'code': 140, 'tabWidth': 2 }],
        'space-before-function-paren': ['error', {
          'anonymous': 'always',
          'named': 'never',
          'asyncArrow': 'always'
        }],
        'no-undef': 'off'
      }
    }
  }
}
