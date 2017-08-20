const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
    entry: "./app/index.tsx",
    resolve: {
        modules: [
            path.resolve(__dirname, "src/app"),
            "node_modules"
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ["style-loader", "css-loader"] },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]",
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=../fonts/[name].[ext]"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=../fonts/[name].[ext]"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.tsx?$/,
                loader: ["awesome-typescript-loader"],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}