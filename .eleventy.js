const _get = require("lodash.get");

/**
 * @typedef {import('@11ty/eleventy/src/UserConfig')} EleventyConfig
 * @typedef {ReturnType<import('@11ty/eleventy/src/defaultConfig')>} EleventyReturnValue
 * @type {(eleventyConfig: EleventyConfig) => EleventyReturnValue}
 */
 module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("where", function (coll, key, value) {
    return coll.filter(item => _get(item, key) === value);
  });

  eleventyConfig.addCollection("liveColl", (collectionApi) => collectionApi);

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
