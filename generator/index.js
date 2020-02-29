module.exports = (api, opts, rootOptions) => {
  api.extendPackage({
    devDependencies: {
      "vuepress": "^0.10.0",
      "webpack-dev-middleware": "3.6.0"
    }
  });

  api.render({
    './docs/.vuepress/config.js': './templates/docs/.vuepress/config.js',
    './docs/core.md': './templates/docs/core.md',
    './docs/commit.md': './templates/docs/commit.md',
    './docs/deploy.md': './templates/docs/deploy.md',
    './docs/QA.md': './templates/docs/commit.md',
    './docs/version.md': './templates/docs/version.md',
    './docs/README.md': './templates/docs/README.md',
    './docs/aboutMe.md': './templates/docs/aboutMe.md',
    './docs/tech.md': './templates/docs/tech.md',
  });

  api.extendPackage({
    scripts: {
      "docs-dev": "vuepress dev docs",
      "docs-build": "vuepress build docs",
    }
  });

};
