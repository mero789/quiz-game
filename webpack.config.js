module.exports = {
  entry: {
    main: './src/client/js/main.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + "./dist/client/js"
  },
  module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
  }
}
