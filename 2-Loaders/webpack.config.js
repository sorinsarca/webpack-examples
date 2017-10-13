const path = require('path');

module.exports = {
    // Multiple entry points
    entry: {
        pageA: "./src/a.js",
        pageB: "./src/b.js"
    },
    output: {
        // use placeholder, each entry will have a bundle
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            // Handle css files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            // Handle scss files
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            // JS transpilation with babel (expensive)
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            }
        ]
    }
};
