var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.js',

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-react", 
                        "@babel/preset-env"
                    ]
                }
            }
        }]
    },

    mode: 'development',

    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};