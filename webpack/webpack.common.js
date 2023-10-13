const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");
const glob = require("glob");

module.exports = {
  entry: () => {
    const entries = {};

    // Find all index.ts files in src directory and subdirectories
    const indexFiles = glob.sync(path.join(srcDir, "**/index.ts"));

    indexFiles.forEach((indexFile) => {
      const folderName = path.dirname(path.relative(srcDir, indexFile));
      entries[path.join(folderName, folderName)] = indexFile;
    });

    // Find all .ts files in src directory and subdirectories, excluding index.ts files
    const tsFiles = glob.sync(path.join(srcDir, "**/*.ts"), {
      ignore: indexFiles,
    });

    tsFiles.forEach((tsFile) => {
      const relativePath = path.relative(srcDir, tsFile);
      console.log(relativePath);
      entries[relativePath.replace(/\.ts$/, "")] = tsFile;
    });

    return entries;
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
        test: /\.css$/i,
        include: path.resolve(__dirname, "../public"),
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
