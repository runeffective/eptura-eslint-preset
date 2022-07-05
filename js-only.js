module.exports = {
  extends: ['eslint:recommended', 'airbnb'],
  rules: {
    'arrow-body-style': 'error',
    'arrow-parens': ['off', 'as-needed'],
    'camelcase': 'error',
    'comma-dangle': 'error',
    'complexity': ['error', 3],
    'constructor-super': 'error',
    'curly': ['error', 'multi-line'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': ['error', 'any', 'Undefined'],
    'id-match': 'error',
    'import/order': [
      'error',
      {
        'alphabetize': {
          'order': 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          'caseInsensitive': true /* ignore case. Options: [true, false] */
        },
        'groups': [['builtin', 'external'], 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': ['error', 1],
    'new-parens': 'error',
    'newline-per-chained-call': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        'allow': [
          'dir',
          'time',
          'timeEnd',
          'timeLog',
          'trace',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'debug',
          'info',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-return-await': 'error',
    'no-shadow': [
      'error',
      {
        'hoist': 'all'
      }
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'warn',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': [
      'error',
      {
        'allowTaggedTemplates': true,
        'allowShortCircuit': true
      }
    ],
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        'singleReturnOnly': true
      }
    ],
    'prefer-const': [
      'error',
      {
        'destructuring': 'any',
        'ignoreReadBeforeAssign': false
      }
    ],
    'quote-props': 'off',
    'radix': 'error',
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['off', 'never'],
    'spaced-comment': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
  }
}
