module.exports = function (eleventyConfig) {
  // CSSをそのままコピー
  eleventyConfig.addPassthroughCopy("src/css");

  // 画像等もコピーする場合
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("assets");

  // JavaScriptをコピー
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      layouts: "includes/layouts"
    }
  };
};
