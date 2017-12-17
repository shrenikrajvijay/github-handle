var debug = process.env.NODE_ENV !== "production"
var glob = require('glob')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: glob.sync("./app/scripts/!(*.min.js)/*.js"),
  output: {
    path: __dirname + "/app/scripts",
    filename: "bundle.min.js"
  },
  module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.(ttf|eot|woff|woff2|svg)$/, loader: "file-loader", options: {name: "../fonts/[name].[ext]"}},
        ]
  },
  plugins: debug ? [new ExtractTextPlugin('style.css')] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
