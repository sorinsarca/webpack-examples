const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = {
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
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
};

const prodConfig = {
    module: {
        rules: [
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
    },
    plugins: [
        // Minimize js
        new UglifyJSPlugin()
    ]
};

const devConfig = {
    // Some dev configs
};


module.exports = (env) => {
    let conf = env.NODE_ENV === 'production'
        ? prodConfig
        : devConfig;
    return merge(commonConfig, conf);
};
