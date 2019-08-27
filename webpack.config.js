var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : __dirname + '/src/App.js',
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/react']
                    }
                }
            },
            {
                test : /\.s[ac]ss$/,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                    
                ]
            }

        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            template : __dirname + '/src/index.html',
            filename : 'index.html',
            inject : 'body'
             })],
    output : {
        path : __dirname + '/dist/',
        filename : 'App.js'
    },
    optimization : {
        minimize : true
    }
}