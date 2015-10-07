module.exports = {
    context: __dirname + "/src",
    entry: {
      js: "./app.jsx",
      html: "./index.html"
    },
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
        },
        {
          test: /\.html$/,
          loader: "file?name=[name].[ext]"
        }
      ]
    }
}
