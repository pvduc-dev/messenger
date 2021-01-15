const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].bundle.js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: process.env.NODE_ENV === 'production',
              transpileOnly: process.env.NODE_ENV === 'production',
            },
          },
        ],
      },
    ],
  },
  target: 'web',
  stats: {
    children: false,
    modules: false,
  },
  devServer: {
    noInfo: true,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    port: 4000,
    progress: true,
    historyApiFallback: true,
    watchContentBase: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3030',
        secure: false
      }
    },
  },
  plugins: [
    new Dotenv({
      path: '.env',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: '[id].[hash].css',
      disable: process.env.NODE_ENV !== 'production',
    }),
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: path.resolve(__dirname, 'src/assets/favicon.ico'),
    }),
  ],
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
    }
  },
};
