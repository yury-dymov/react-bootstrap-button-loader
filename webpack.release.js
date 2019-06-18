var webpack       = require('webpack');
var path          = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    Spinner: ['./src/Spinner'],
    index: './src/ButtonLoader'
  },
  output:  {
    path:          path.join(__dirname, 'dist'),
    filename:      '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
  module:  {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  }
};


