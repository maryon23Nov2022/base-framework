const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "main.js"
    },
    devServer: {
        port: 3000,
        static: {
            directory: __dirname
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.jpg|png|gif$/, use: ["url-loader?limit=65536"] },
            { test: /\.vue$/, use: ["vue-loader"] }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        }),
        new VueLoaderPlugin()
    ]
}