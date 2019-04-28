const { resolve } = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        stats: "errors-only",
        // contentBase: "./dist",
        hot: true,
        port: 9000,
        historyApiFallback: true,
        open: false,
        overlay: {
            errors: true,
            warnings: true,
        },
    },
    module: {
        rules: [
            {
                test: /(\.css|\.scss)$/,
                use: [
                    {
                        loader: ExtractCssChunks.loader,
                        options: {
                            hot: true,
                            reloadAll: false,
                        },
                    },
                    { loader: "css-loader", options: { sourceMap: true } },
                    { loader: "postcss-loader", options: { sourceMap: true } },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [resolve(__dirname, "node_modules"), resolve(__dirname, "./src/pack")],
                            data: '@import "application.scss";',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html",
            // favicon: './images/favicon.png',
            // inject: true,
        }),
        // Ignore node_modules so CPU usage with poll
        // watching drops significantly.
        new webpack.WatchIgnorePlugin([resolve(__dirname, "node_modules")]),
        new ExtractCssChunks({
            filename: "css/[name].css",
            hot: true,
        }),
    ],
})
