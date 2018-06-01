const { resolve } = require("path")

var webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    context: resolve(__dirname, "src"),
    entry: ["babel-polyfill", "./pack/application.js"],
    output: {
        path: resolve(__dirname, "dist/"),
        filename: "./js/[name]-bundle.js",
        chunkFilename: "js/[name]-bundle.js",
    },
    resolve: {
        extensions: [".js"],
        alias: {
            components: resolve(__dirname, "src/components"),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                            interpolate: true,
                        },
                    },
                ],
            },
            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "../", // override the default path
                    outputPath: "fonts/",
                    limit: 10 * 1024,
                },
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "../",
                    outputPath: "images/",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        browsers: ["last 2 versions", "not ie < 11"],
                                    },
                                    modules: false,
                                    debug: true,
                                    useBuiltins: "usage",
                                    // exclude: ["transform-regenerator"],
                                },
                            ],
                        ],
                        plugins: ["module:mopt"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html",
        }),
        new webpack.ProvidePlugin({
            m: "mithril", //Global access
        }),
    ],
}
