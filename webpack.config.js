const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "polygons.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
  },
};
