const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'
let target = 'web'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
  target = 'browserslist'
}

const randomPort = () => {
  return Math.floor(Math.random() * 9999) + 100
}

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
]

module.exports = {
  mode,
  plugins,
  target,
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './main.js',
    index: './index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    allowedHosts: 'auto',
    compress: true,
    open: true,
    hot: false,
    port: randomPort(),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[name].[ext]',
        },
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
}
