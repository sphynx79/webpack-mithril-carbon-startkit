const { resolve } = require("path")

const webpack = require("webpack")

module.exports = {
    context: resolve(__dirname, "src"),
    entry: ["./pack/application.js"],
    output: {
        path: resolve(__dirname, "dist/"),
        filename: "./js/[name]-bundle.js",
        chunkFilename: "js/[name]-bundle.js",
    },
    resolve: {
        extensions: [".js"],
        alias: {
            components: resolve(__dirname, "src/components"),
            "mithril/stream": resolve(__dirname, "node_modules/mithril/stream/stream.js"),
            mithril: resolve(__dirname, "node_modules/mithril/mithril.js"),
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
                    publicPath: "../fonts/", // override the default path
                    outputPath: "fonts/",
                    limit: 10 * 1024,
                },
            },
            {
                test: /\.(png|jpg|svg|gif|ico)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "../images/",
                    outputPath: "images/",
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            m: "mithril", //Global access
        }),
    ],
}
