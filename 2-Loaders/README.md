# Loaders

## App structure

- `/src` - source code
    - `a.js` - entry for pageA
    - `a.css` - style for pageA
    - `b.js` - entry for pageB
    - `b.scss` - style for pageB
    - `h.css` - style
    - `helper.js` - helper file
- `/dist` - webpack build
    - `pageA.bundle.js` - bundle file for pageA
    - `pageB.bundle.js` - bundle file for pageB
- `index.html` - test file
- `package.json` - package info
- `webpack.config.js` - webpack configuration

## Description

Generates js bundles for each entry point (css is included in js).

## Dependencies

```bash
yarn add jquery
```

#### jquery

https://github.com/jquery/jquery

## Dev dependencies

```bash
yarn add css-loader style-loader --dev
yarn add node-sass sass-loader --dev
yarn add babel-loader babel-core babel-preset-env --dev

yarn add webpack --dev
```

#### css-loader

https://github.com/webpack-contrib/css-loader

#### style-loader

https://github.com/webpack-contrib/style-loader

#### sass-loader & node-sass

https://github.com/webpack-contrib/sass-loader

https://github.com/sass/node-sass

#### babel-loader, babel-core & babel-preset-env

https://github.com/babel/babel-loader

https://github.com/babel/babel

https://github.com/babel/babel-preset-env

#### webpack

https://github.com/webpack/webpack
