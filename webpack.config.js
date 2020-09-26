var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",

    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/"
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        compress: true,
        port: 9000
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                resolve:{
                    extensions:[".jsx", ".js"]
                },
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react", 
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
            },
            {
                test: /\.(eot|ttf)$/,
                loader: "file-loader",
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    mode: "development",

    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            manifest: "./public/manifest.json"
        })
    ]
};