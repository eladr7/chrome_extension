const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");

module.exports = {
  entry: {
    popup: path.join(srcDir, "popup/index.ts"),
    options: path.join(srcDir, "options/index.ts"),
    background: path.join(srcDir, "background/index.ts"),
    content_script: path.join(srcDir, "content_script/index.ts"),
  },
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js",
  },
  // optimization: {
  //   splitChunks: {
  //     name: "vendor",
  //     chunks(chunk) {
  //       return chunk.name !== "background";
  //     },
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // CSS/PostCSS loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: "../", context: "public" }],
      options: {},
    }),
  ],
};
