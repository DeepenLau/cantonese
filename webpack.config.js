'use strict';
var path = require('path');
var webpack = require('webpack');

var outputPath = './dist';
var outputScript = 'js/script.js';
var outputStyle = 'css/style.css';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('./package.json');

var pages = {
    '细语倾诉': 'history/',
    '南国红豆': 'opera/',
    '劲歌金曲': 'music/',
    '谈笑风生': 'video/'
};

var extraPages = {
    '粤剧': 'opera/opera-1.html',
    '粤曲': 'opera/opera-2.html',
    '盏鬼广州话': 'video/video-1.html',
    '经典广告': 'video/video-2.html',
    '栋笃笑': 'video/video-3.html',
    '舌尖上的粤语': 'video/video-4.html'
};

var plugins = [
    new ExtractTextPlugin(outputStyle)
];

for (var item in pages) {
    if(pages.hasOwnProperty(item)){
        plugins.push(
            new HtmlWebpackPlugin({
                title: item,
                filename: pages[item] + 'index.html',
                template: path.join(__dirname, 'src/template/template.html')
            })
        )
    }
}

for (var item in extraPages) {
    if(extraPages.hasOwnProperty(item)){
        plugins.push(
            new HtmlWebpackPlugin({
                title: item,
                filename: extraPages[item],
                template: path.join(__dirname, 'src/template/template.html')
            })
        )
    }
}

plugins.push(
    new HtmlWebpackPlugin({
        title: '首页',
        filename: 'index.html',
        template: path.join(__dirname, 'src/template/templateIndex.html')
    })
)

module.exports = {
    entry: './src/in.js',
    output: {
        path: outputPath,
        filename: outputScript
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!less')},
            {test: /\.mp3$/, loader: 'file?name=/media/music/[name].[ext]'},
            {test: /\.mp4$/, loader: 'file?name=/media/video/[name].[ext]'},
            {test: /\.(woff2|woff|svg|ttf|eot)([\?]?.*)$/, loader: 'file?name=[path][name].[ext]'},
            {test: /\.(png|jpg|gif)$/, loader: 'file?name=../images/[name].[ext]'}
        ]
    },
    externals: {
        'jquery': '$'
    },
    plugins: plugins
};


