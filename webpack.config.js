var path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
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
    }
};