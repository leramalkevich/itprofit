const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9090,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            baseUrl: '/'
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/templates", to: "templates"},
            ]
        })
    ]
};