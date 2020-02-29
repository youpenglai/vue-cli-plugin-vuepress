# 部署文档
fotoup项目是基于nuxt的服务器预渲染框架，服务器是node, 借助的进程守护工具pm2。

## 部署流程
 
1. 准备更新文件，和简单文档说明
2. 钉钉提交审批
3. 文档资源存放到共享服务器上
4. redmine提交部署给运维

## 生产环境
1. 代码构建
    `npm run build`
    `zip打包`
    
    可以借助zip-version
    
    运行： `npm run zip-version-prerelease`
     
    可以自动构建，自动zip打包。
    
    注意，可能需要修改gulpfile，自定义构建的文件。
   
2. 域名以及存放路径
    `photoup.youpenglai.com`
    `/var/www/photoup`
    
3. 部署步骤
    1. `npm install`
    2. `npm run build`
    3. `pm2 start/restart start.config.js`
    
    可以借助`zip-version`
        
    运行： `npm run production`
     
    可以自动安装依赖，自动构建，自动启动服务。
    
4. 注意事项
    端口: 22811

## 预上线环境

1. 测试环境构建步骤
2. 域名以及存放路径
3. 部署步骤
4. 注意事项

## 测试环境

1. 测试环境构建步骤
2. 域名以及存放路径
3. 部署步骤
4. 注意事项

## 本地环境配置

1. 测试环境配置
2. 构建步骤
3. 注意事项

## 项目配置文件说明

1. start.config.js pm2 启动文档
2. config.js 项目配置文档
