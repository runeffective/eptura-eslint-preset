# spaceiq-eslint-preset
Lint preset and other suggested configs for spaceiq javascript projects

## Installation
Add the following to your .npmrc file (either in your project or your home directory):
```
  @runeffective:registry=https://npm.pkg.github.com
```

Then run the following commands:
- `yarn install @runeffective/plugin-eslint-preset -D`

Or if you are using npm:
- `npm install @runeffective/plugin-eslint-preset -D`

## Usage

in your `.eslintrc` file, add the following:
```
{
  extends: ['plugin:@runeffective/eslint-preset'],
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module'
  },
  rules: {
    // you can add your own custom rules
    // or overwrite rules from the app here
  }
}
```

## Vanilla JS Usage
```
{
  extends: ['./node_modules/@runeffective/plugin-eslint-preset/js-only.js'],
  rules: {
    // you can add your own custom rules
    // or overwrite rules from the app here
  }
}
```

## Prettier
Prettier is highly suggested for use. This package also includes a suggested prettier config.

To use create a `.prettierrc.js` file in your project with the following contents:
```
module.exports = {
  ...require('@runeffective/plugin-eslint-preset/prettierrc')
};
```


