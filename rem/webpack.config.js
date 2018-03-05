//创建webpack.config.js
var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './app.js', //入口文件
    output: {
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
        path: path.resolve(__dirname, './build'), //输出位置
        filename: 'bundle.js' //输入文件
    },
    module: {
        loaders: [
            {
                test: /\.css$/,//支持正则
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(scss|sass)$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
            }
        ]
    }
}
