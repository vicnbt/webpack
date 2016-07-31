"use strict";
const NODE_ENV = process.env.NODE_ENV || "dev";
const webpack = require("webpack");

module.exports = {

    entry: {
        common: "./source/js/common"
    },

    output: {
        path:"bin",
        publicPath:"/",
        filename: "[name].js",
        library: "[name]"
    },

    watch: NODE_ENV=="dev"?"true":null,

    devtool: NODE_ENV=="dev"?"source-map":null,

    plugins : [
        new webpack.DefinePlugin({NODE_ENV:JSON.stringify(NODE_ENV)}),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel?presets[]=es2015"
        }]
    }
};


if(NODE_ENV == "prod"){
    module.exports.plugins.push(
        //new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}

