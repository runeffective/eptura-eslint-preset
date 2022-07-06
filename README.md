# spaceiq-eslint-preset
Lint preset and other suggested configs for spaceiq javascript projects

## Installation
Add the following to your .npmrc file (either in your project or your home directory):
```
  @runeffective:registry=https://npm.pkg.github.com
```
(you can also copy the file in this repo)

Then run the following commands:
- `yarn install @runeffective/plugin-eslint-preset -D`
- `npx install-peerdeps --dev @runeffective/eslint-plugin`

Or if you are using npm:
- `npm install @runeffective/plugin-eslint-preset -D`
- `npx install-peerdeps --dev @runeffective/eslint-plugin`

## Usage

in your `.eslintrc` file, add the following:
```
{
  extends: ['plugin:@runeffective/recommended'],
  parserOptions: {
    project: ['./tsconfig.json'],
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
  extends: ['plugin:@runeffective/jsOnly'],
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

## Other topics

### This config and jetbrains IDEs
For some reason, this config with jetbrains IDEs can cause some weirdness, especially when using nx.
To fix this, use the following in your eslint config (you will have to use .eslintrc.js instead of json):

```
parserOptions: {
  project: ['./tsconfig.json'],
  tsconfigRootDir: __dirname,
}
```

### Import typescript resolver
To simplify things, this plugin has turned off the `import/no-unresolved` rule as this does not work with typescript 
files. To enable this, simply install the 
