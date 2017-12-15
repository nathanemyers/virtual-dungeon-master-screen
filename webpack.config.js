const path = require("path");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
        data: path.resolve(__dirname, 'data/'),
        app: path.resolve(__dirname, 'src/app/')
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
