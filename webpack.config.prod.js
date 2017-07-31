var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'example'),
    entry: {
        js: ['./app.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
            }, {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            }, {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    postcss: [
      autoprefixer({
        browsers: [
          'ie >= 8',
          'ie_mob >= 10',
          'ff >= 26',
          'chrome >= 30',
          'safari >= 6',
          'opera >= 23',
          'ios >= 5',
          'android >= 2.3',
          'bb >= 10',
        ]
      }),
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('weui.min.css'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'example/index.html')
        }),
    ]
};
