module.exports = {
  title: "产品中心-项目文档",
  description: "项目文档",
  dest: 'docs-dist',

  themeConfig: {
    repo: 'xxx',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    sidebar: [
      {
        title: "项目说明文档",
        collapsable: false,
        children: [
          ['core', '核心业务'],
          ['version', '版本更新'],
          ['deploy', '项目部署'],
          ['tech', '项目架构'],
          ['commit', '代码提交规范'],
          ['QA', '尚存问题'],
          ['aboutMe', '关于我']
        ]
      }
    ]
  }
}
