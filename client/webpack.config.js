const path = require("path");
const babili = require("babili-webpack-plugin");

let plugins = [];

if (process.env.NODE_ENV === "production") plugins.push(new babili());

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins,
};
