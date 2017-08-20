const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const OptimizeJsPlugin = require("optimize-js-plugin");
const UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = webpackMerge(baseConfig, {
    devtool: "source-map",
    output: {
        path: path.resolve("wwwroot"),
        filename: "[name].[hash].bundle.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new OptimizeJsPlugin({
            sourceMap: false
        }),
        new BundleAnalyzerPlugin({
            // Can be `server`, `static` or `disabled`.
            // In `server` mode analyzer will start HTTP server to show bundle report.
            // In `static` mode single HTML file with bundle report will be generated.
            // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
            analyzerMode: "static",
            // Port that will be used in `server` mode to start HTTP server.
            // analyzerPort: 8888,
            // Path to bundle report file that will be generated in `static` mode.
            // Relative to bundles output directory.
            reportFilename: "report.html",
            // Automatically open report in default browser
            openAnalyzer: false,
            // If `true`, Webpack Stats JSON file will be generated in bundles output directory
            generateStatsFile: false,
            // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
            // Relative to bundles output directory.
            statsFilename: "stats.json",
            // Options for `stats.toJson()` method.
            // For example you can exclude sources of your modules from stats file with `source: false` option.
            // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
            statsOptions: null,
            // Log level. Can be "info", "warn", "error" or "silent".
            logLevel: "info"
        }),
        new UglifyJsPlugin({
            beautify: false,
            comments: false,
            sourceMap: true
        })
    ]
});