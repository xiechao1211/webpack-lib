const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
let libraryName = 'ops'
let filename = libraryName + '.min.js'

module.exports = {
  context: path.resolve(__dirname, "../"),
  devtool: 'inline-source-map',
  // webpack入口
  entry: {
    app: "./src/main.js",
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  // webpack输出
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: filename,
    library: libraryName,
    libraryTarget: 'umd',
    // umdNamedDefine: true,
    // libraryExport: 'default',
    // globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    // 配置webpack各种loader
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src")]
      },
      {
        test: /\.less$/,
        use:[
            // "style-loader",
            MiniCssExtractPlugin.loader,
            {loader: "css-loader",options:{sourceMap: true, importLoaders: 1}},
            "postcss-loader",
            "less-loader"
        ]
      },
      {
        test: /\.css$/,
        use:[
            // "style-loader",
            MiniCssExtractPlugin.loader,
            {loader: "css-loader",options:{sourceMap: true, importLoaders: 1}},
            "postcss-loader"
        ]
      },

    ]
  },
  plugins: {

  }
};
