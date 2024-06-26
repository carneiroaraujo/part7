const path = require("path")

function config() {
    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "main.js"
        },
        devServer: {
            static: path.resolve(__dirname, "build"),
            compress: true,
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        }
    }
}

module.exports = config