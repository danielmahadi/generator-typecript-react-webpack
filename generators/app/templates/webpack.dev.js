const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

module.exports = webpackMerge(baseConfig, {
    devtool: "cheap-module-source-map",
    output: {
        path: path.resolve("wwwroot"),
        filename: "[name].[hash].bundle.js"
    }
})