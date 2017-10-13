const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// Default settings for production
const CONF = {
    dist: 'dist',
    publicPath: '/dist',
    sourceMaps: true,
    extractStyles: true,
    minimizeStyles: true,
    entries: {
        pageA: "./src/a.js",
        pageB: "./src/b.js"
    },
    vendor: ['jquery', 'react']
};


const commonConfig = (CONF) => {

    let extractStyle = new ExtractTextPlugin({
        filename: "[name].css",
        disable: !CONF.extractStyles
    });

    // Setup vendor entry
    let entry = JSON.parse(JSON.stringify(CONF.entries));
    entry.vendor = CONF.vendor;

    // Return common config
    return {
        // Multiple entry points
        entry: entry,
        output: {
            // use placeholder, each entry will have a bundle
            filename: "[name].js",
            path: path.resolve(__dirname, CONF.dist),
            publicPath: CONF.publicPath
        },
        plugins: [
            // Clean dist dir
            new CleanWebpackPlugin([CONF.dist]),

            // Extract style
            extractStyle,

            // Chunks
            // Vendor dependencies => vendor.js
            // Common dependencies => common.js
            new webpack.optimize.CommonsChunkPlugin({
                names: ['common', 'vendor'],
                filename: "[name].js",
                minChunks: function (module, count) {
                    if (count >= 2) {
                        return true;
                    }
                    // Check if it is from vendor (node_modules)
                    let r = module.resource;
                    return r && r.indexOf('node_modules') >= 0 && r.match(/\.js$/);
                }
            })
        ],
        module: {
            rules: [
                // Handle css files
                {
                    test: /\.css$/,
                    use: extractStyle.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: CONF.minimizeStyles,
                                    sourceMap: CONF.sourceMaps
                                }
                            }
                        ],
                        fallback: 'style-loader'
                    })
                },

                // Handle scss files
                {
                    test: /\.scss$/,
                    use: extractStyle.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: CONF.minimizeStyles,
                                    sourceMap: CONF.sourceMaps
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: CONF.sourceMaps
                                }
                            }
                        ],
                        fallback: 'style-loader'
                    })
                }
            ]
        }
    }
};

const prodConfig = (CONF) => ({
    devtool: 'source-map',
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
        // Use hashed module ids for production
        new webpack.HashedModuleIdsPlugin(),

        // Tree Shake
        new UglifyJSPlugin({
            parallel: true,
            sourceMap: CONF.sourceMaps
        })
    ]
});

const devConfig = (CONF) => ({
    devtool: 'inline-source-map',
    plugins: [
        // Use named modules for development
        new webpack.NamedModulesPlugin()
    ]
});

module.exports = (env) => {
    let config;
    if (env.NODE_ENV === 'production') {
        config = prodConfig(CONF);
    }
    else {
        let isHot = env.NODE_ENV === 'development-hot';
        CONF.sourceMaps = false;
        CONF.minimizeStyles = false;
        // Extract stiles only if not in hot mode
        CONF.extractStyles = !isHot;
        config = devConfig(CONF);
        if (isHot) {
            config = merge(config, {
                devServer: {
                    contentBase: __dirname,
                    hot: true
                },
                plugins: [
                    new webpack.HotModuleReplacementPlugin()
                ]
            });
        }
    }
    // Merge configs
    return merge(commonConfig(CONF), config);
};
