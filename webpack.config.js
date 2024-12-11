const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/modules/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "src", "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/index.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
