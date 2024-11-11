const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './server/index.ts',
  externals: [nodeExternals()],
  mode: 'production',
  output: {
    filename: 'server.cjs',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { 
                targets: { node: 'current' },
                modules: 'commonjs'
              }],
              '@babel/preset-typescript'
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}; 