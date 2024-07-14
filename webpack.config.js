const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      {
        test: /.css$/,
        use: [ 'style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx extensions
  }

}