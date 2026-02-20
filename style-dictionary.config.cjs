const path = require("path");
const StyleDictionary = require("style-dictionary");

StyleDictionary.registerFormat({
  name: "custom/index",
  formatter: require("./tokens/generator/formatters/indexFormatter.cjs")
});

module.exports = {
  // semantic/component만 export, base/asset는 참조 해석용
  include: [
    "tokens/source/base/**/*.json",
    "tokens/source/asset/**/*.json"
  ],
  source: [
    "tokens/source/semantic/**/*.json",
    "tokens/source/component/**/*.json"
  ],

  platforms: {
    // -----------------------------
    // SCSS Output (퍼블리싱용)
    // -----------------------------
    scss: {
      transformGroup: "scss",
      buildPath: "tokens/dist/scss/",
      files: [
        {
          destination: "semantic.scss",
          format: "scss/variables",
          fileHeader: "none",
          filter: (token) => token.filePath.includes("semantic")
        },
        {
          destination: "component.scss",
          format: "scss/variables",
          fileHeader: "none",
          filter: (token) => token.filePath.includes("component")
        },
        {
          destination: "index.scss",
          format: "custom/index",
          fileHeader: "none"
        }
      ]
    },

    // -----------------------------
    // CSS Output (개발 fallback)
    // -----------------------------
    css: {
      transformGroup: "css",
      buildPath: "tokens/dist/css/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          fileHeader: "none"
        }
      ]
    },

    // -----------------------------
    // JS Output (React/TS 대응)
    // -----------------------------
    js: {
      transformGroup: "js",
      buildPath: "tokens/dist/js/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
          fileHeader: "none"
        }
      ]
    }
  }
};