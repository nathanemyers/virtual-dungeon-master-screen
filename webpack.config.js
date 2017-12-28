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
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},        
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
    //loaders: [{
      //exclude: /node_modules/,
      //loader: 'babel-loader'
    //}]
  },
  resolve: {
    extensions: [
      '.js', 
      '.jsx', 
      '.scss',
    ],
    alias: {
        data: path.resolve(__dirname, 'data/'),
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
