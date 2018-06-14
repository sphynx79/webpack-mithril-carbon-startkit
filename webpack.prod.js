const merge = require("webpack-merge")
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const OptimizeJsPlugin = require("optimize-js-plugin")
const common = require("./webpack.common.js")

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /(\.css|\.scss)$/,
                use: [
                    ExtractCssChunks.loader,
                    { loader: "css-loader", options: { sourceMap: false } },
                    { loader: "postcss-loader", options: { sourceMap: false } },
                    { loader: "sass-loader", options: { sourceMap: false, modules: true } },
                ],
            },
        ],
    },
    optimization: {
        nodeEnv: "production",
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    ecma: 8,
                    ie8: false,
                    comments: false,
                },
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require("cssnano"),
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true,
            }),
            new OptimizeJsPlugin({ sourceMap: false }),
        ],
        runtimeChunk: {
            name: "manifest",
        },
        splitChunks: {
            chunks: "async",
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial",
                    reuseExistingChunk: true,
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(["dist/*.*"]),
        new ExtractCssChunks({
            filename: "css/[name].css",
            // chunkFilename: "css/[id].css",
            // allChunks: true,
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
})
