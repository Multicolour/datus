module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "datus.js",
    path: __dirname + "/dist"
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: "pre",
        use: ["remove-flow-types-loader"],
        include: __dirname + "/src"
      }
    ]
  }
}
