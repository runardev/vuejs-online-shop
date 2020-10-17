const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/main.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src/"),
        "@": path.resolve(__dirname, "src/")
      }
    }
  }
};
