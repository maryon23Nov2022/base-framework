const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    // devtool: "eval-source-map",
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
            { test: /\.jpg|png|gif|hdr$/, use: ["url-loader?limit=65536"] },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        })
    ]
}