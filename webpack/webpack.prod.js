const common = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(common,{
    devtool:'source-map', //实际线上环境应该关闭sourceMap
    plugins:[
        // new UglifyJSPlugin()
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        })

    ]
})