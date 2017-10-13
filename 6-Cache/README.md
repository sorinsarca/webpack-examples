# Cache

## App structure

- `/src` - source code
    - `a.js` - entry for pageA
    - `a.css` - style for pageA
    - `b.js` - entry for pageB
    - `b.scss` - style for pageB
    - `h.css` - style
    - `helper.js` - helper file
- `/dist` - webpack build
    - `manifest.js` - webpack's manifest
    - `vendor.js` - vendor related js
    - `common.js` - common js code shared by bundles
    - `common.css` - common css code shared by bundles
    - `pageA.js` - js for pageA
    - `pageA.css` - css for pageA
    - `pageB.js` - js for pageB
    - `pageB.css` - css for pageB
    - _Note!_ - all files also have a `.map` file
- `webpack.records.json` - webpack records file
- `index.html` - test file
- `package.json` - package info
- `webpack.config.js` - webpack configuration

## Description

Example for a better code-split and cache.
Here the webpack manifest is extracted. Changing code in app will not
rebuild the vendor. You will probably need to add `webpack.records.json`
to VCS.
This example can be extended to use hashes in filenames.

## Dependencies

```bash
yarn add react
yarn add jquery
```

#### react

https://github.com/facebook/react

#### jquery

https://github.com/jquery/jquery

## Dev dependencies

```bash
yarn add webpack-dev-server --dev
yarn add extract-text-webpack-plugin --dev
yarn add uglifyjs-webpack-plugin --dev
yarn add webpack-merge --dev
yarn add clean-webpack-plugin --dev
yarn add css-loader style-loader --dev
yarn add node-sass sass-loader --dev
yarn add babel-loader babel-core babel-preset-env --dev
yarn add webpack --dev
```

#### webpack-dev-server

https://github.com/webpack/webpack-dev-server

#### extract-text-webpack-plugin

https://github.com/webpack-contrib/extract-text-webpack-plugin

#### uglifyjs-webpack-plugin

https://github.com/webpack-contrib/uglifyjs-webpack-plugin

#### webpack-merge

https://github.com/survivejs/webpack-merge

#### clean-webpack-plugin

https://github.com/johnagan/clean-webpack-plugin

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
