const path = require("path");
const { node } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/server/index.js", // エントリーポイントを指定
  target: "node", // Node.js 環境向けにバンドルする
  output: {
    path: path.resolve(__dirname, "dist"), // 出力先ディレクトリ
    filename: "bundle.js", // 出力ファイル名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js ファイルに対してローダーを適用
        include: /node_modules\/express/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Babel を使用する
          options: {
            presets: ["@babel/preset-env"], // Babel のプリセットを指定
          },
        },
      },
    ],
  },
};
