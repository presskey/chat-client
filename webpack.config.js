module.exports = {
    context: __dirname + "/src",
    entry: "./app.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    }
}
