module.exports = function (eleventyConfig) {
  // CSSをそのままコピー
  eleventyConfig.addPassthroughCopy("src/css");

  // 画像等もコピーする場合
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      layouts: "includes/layouts"
    }
  };
};
