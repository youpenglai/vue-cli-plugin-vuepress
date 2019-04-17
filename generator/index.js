module.exports = (api, opts, rootOptions) => {
  api.extendPackage({
    devDependencies: {
      "vuepress": "^0.10.0",
      "webpack-dev-middleware": "3.6.0"
    }
  });

  api.render({
    './docs/README.md': './templates/docs/README.md',
    './docs/.vuepress/config.js': './templates/docs/.vuepress/config.js',
    './docs/core.md': './templates/docs/core.md',
    './docs/deploy.md': './templates/docs/deploy.md',
    './docs/version.md': './templates/docs/version.md'
  });

  api.extendPackage({
    scripts: {
      "docs-dev": "vuepress dev docs",
      "docs-build": "vuepress build docs",
    }
  });

};
