const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    entry: path.join(__dirname, "./src/index.js"),
    // entry: path.join(__dirname, "./src/1-index-newbie.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "main.js"
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, "./dist")
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 8096
                    }
                },
                generator: {
                    filename: '[contenthash][ext]'
                }
            },

            {
                test: /\.(ico|html)$/i,
                type: "asset/resource",
                generator: {
                    filename: "[name][ext]"
                }
            },

            {
                test: /\.(hdr|mp4|glb)$/i,
                type: "asset/resource",
                generator: {
                    filename: "[contenthash][ext]"
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}