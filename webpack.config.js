const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        main: './src/index.js'
    },

    output: {
        path: './build/client/',
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js', '.css']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    loader: [
                        {
                            loader: 'css-loader',
                            query: {
                                localIdentName: '[hash:8]',
                                modules: true
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ]
};
