const path = require("path");
const babiliPlugin = require("babili-webpack-plugin");
const extratTextPlugin = require("extract-text-webpack-plugin");
const optimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");
const htmlPlugin = require("html-webpack-plugin");

let plugins = [];

plugins.push(
  new htmlPlugin({
    hash: true,
    minify: {
      html5: true,
      collapseWhitespace: true,
      removeComments: true,
    },
    filename: "index.html",
    template: __dirname + "/main.html",
  })
);

plugins.push(new extratTextPlugin("styles.css"));
plugins.push(
  new webpack.ProvidePlugin({
    $: "jquery/dist/jquery.js",
    jQuery: "jquery/dist/jquery.js",
  })
);
plugins.push(
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "vendor.bundle.js",
  })
);

// Env variable
let SERVICE_URL = JSON.stringify("http://localhost:3000");

if (process.env.NODE_ENV === "production") {
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  plugins.push(new babiliPlugin());
  plugins.push(
    new optimizeCssPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: true,
    })
  );
}
plugins.push(
  new webpack.DefinePlugin({
    SERVICE_URL,
  })
);

module.exports = {
  entry: {
    app: "./src/app.js",
    vendor: ["jquery", "bootstrap", "reflect-metadata"],
  },
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
      {
        test: /\.css$/,
        use: extratTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
      {
        test: /.(woff(2)?$)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream",
      },
      {
        test: /.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
      },
      {
        test: /.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      },
    ],
  },
  plugins,
  devServer: {
    noInfo: true,
  },
};
