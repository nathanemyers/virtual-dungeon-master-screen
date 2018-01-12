const path = require("path");
const package = require('./package.json')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: `dist/virtual-dm-screen-${package.version}.js`
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options: {modules: true}},        
          {loader: "sass-loader"},
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader"},
        ]
      },
    ],
  },
  resolve: {
    extensions: [
      '.js', 
      '.jsx', 
      '.scss',
    ],
    alias: {
        app: path.resolve(__dirname, 'src/app/'),
        style: path.resolve(__dirname, 'src/style/'),
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
