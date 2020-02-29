module.exports = {
  title: "产品中心-项目总结文档",
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
          ['deploy', '项目部署'],
          ['tech', '项目架构'],
          ['commit', '代码提交规范'],
          ['QA', '现存问题'],
          ['version', '版本历史'],
          ['aboutMe', '文档编辑指南']
        ]
      }
    ]
  }
}
