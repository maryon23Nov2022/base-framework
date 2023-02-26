const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// console.log(path);

module.exports = {
    mode: "development",        // "development" or "production".

    devtool: "eval-source-map",
    // for security reason, default value or "nosource-source-map" is recommend when deployment.

    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "main.js"
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, "./dist"),
            // Tell the server where to serve the content from. Default value is: path.join(__dirname, "/public")
        },
        watchFiles: ["./public/index.html"]
    },
    module: {
        // Only when webpack can't package the file "module" chunk will be invoked.

        rules:[     //Matching rules for file suffix names

            // { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.css$/, use: ["style-loader"] },
            { test: /\.css$/, use: ["css-loader"] },
            // Loaders are evaluated/executed from right to left (or from bottom to top).
            // https://webpack.js.org/concepts/loaders/
            
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

            // {
            //     test: /.*[.](?!(png|jpe?g|gif|js|css)$)[^.]*$/i,
            //     type: "asset/resource",
            //     generator: {
            //         filename: "[path][contenthash].[ext]"
            //     }
            // },

            { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}