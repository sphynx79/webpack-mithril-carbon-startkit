const { resolve } = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const compress = require("koa-compress")
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    serve: {
        option: {
            http2: true,
            clipboard: false,
        },
        add: (app, middleware, options) => {
            app.use(compress({ threshold: 2048 }))
        },
    },
    module: {
        rules: [
            {
                test: /(\.css|\.scss)$/,
                use: [ExtractCssChunks.loader, { loader: "css-loader", options: { sourceMap: true } }, { loader: "postcss-loader" }, { loader: "sass-loader" }],
            },
        ],
    },
    plugins: [
        // Ignore node_modules so CPU usage with poll
        // watching drops significantly.
        new webpack.WatchIgnorePlugin([resolve(__dirname, "node_modules")]),
        new ExtractCssChunks({
            filename: "css/[name].css",
            hot: true,
        }),
    ],
})
