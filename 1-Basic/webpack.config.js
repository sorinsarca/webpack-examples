const path = require('path');

module.exports = {
    // One entry point
    entry: "./src/basic.js",
    // One (big) bundle
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    }
};
