# Examples for webpack v3

The last example (`6-Cache`) uses features from other examples.
The purpose of this example is long term caching.
The final result is something like:

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
