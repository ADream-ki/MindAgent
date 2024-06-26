const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../src/renderer/assets"),
          to: path.resolve(__dirname, "../renderer"),
          filter: (source) => {
            return !source.includes("index.html");
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),

      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            pure_funcs: ["console.log"],
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          minChunks: 1,
          chunks: "initial",
          minSize: 0,
          priority: 1,
        },
        commons: {
          name: "commons",
          minChunks: 2,
          chunks: "initial",
          minSize: 0,
        },
      },
    },
  },
});
