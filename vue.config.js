/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const vueSrc = "./src";
const AtomsDirectory = "./src/components/atoms";
const ComponentsDirectory = "./src/components";
const AssetsDirectory = "./src/assets";
const HelpersDirectory = "./src/helpers";

module.exports = {
  runtimeCompiler: true,
  css: {
    modules: true,
  },
  publicPath: process.env.NODE_ENV === "production" ? "/fm21-photosnap" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),
        "@atoms": path.resolve(__dirname, AtomsDirectory),
        "@components": path.resolve(__dirname, ComponentsDirectory),
        "@assets": path.resolve(__dirname, AssetsDirectory),
        "@helpers": path.resolve(__dirname, HelpersDirectory),
      },
      extensions: [".js", ".vue", ".json", ".styl"],
    },
  },
};
