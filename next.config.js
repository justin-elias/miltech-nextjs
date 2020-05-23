const path = require("path");

module.exports = {
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    config.node = {
      fs: "empty",
      tls: "empty",
      net: "empty",
      module: "empty"
    };
    return config;
  },
};
