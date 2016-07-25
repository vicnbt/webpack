"use strict";
const NODE_ENV = process.env.NODE_ENV || "dev";
const webpack = require("webpack");

module.exports = {
    entry: "./entry.js",
    output: {
        filename: "bundle.js",
        library: "app"
    },

    watch: NODE_ENV=="dev"?"true":null,

    devtool: NODE_ENV=="dev"?"source-map":null,

    plugins : [
        new webpack.DefinePlugin({NODE_ENV:JSON.stringify(NODE_ENV)})
    ]
};

