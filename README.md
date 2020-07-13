本 Demo 是基于`@medux/react-web-router`和`@medux/web-route-plan-a`开发的 WebApp 项目

## 关于@medux

请先阅读：[@medux 概述](https://github.com/wooline/medux)

## 关于@medux/core

请先阅读：[@medux/core 概述](https://github.com/wooline/medux/tree/master/packages/core)

## 关于@medux/react-web-router

基于`@medux/react`、`@medux/web`、`react-router`，是 React 开发 WebApp 的方案

参阅：[@medux/react-web-router](https://github.com/wooline/medux/tree/master/packages/react-web-router)

## 关于@medux/web-route-plan-a

基于`@medux/web`，是一套具体的路由序列化与反序列化方案

参阅：[@medux/web-route-plan-a](https://github.com/wooline/medux/tree/master/packages/web-route-plan-a)

## 安装

```
git clone https://github.com/wooline/medux-demo-spa.git
cd medux-demo-spa
npm install
npm start
```

## 运行2

- `npm start` 以开发模式运行
- `npm run build` 编译生成文件
- `npm run build-demo` 编译生成文件并启用一个 express 做 demo

## 查看在线 Demo

- [点击查看在线 Demo](http://react-coat.spa.teying.vip/)

- 或者手机扫码查看：
  ![在线 Demo](https://github.com/wooline/react-coat-spa-demo/blob/master/docs/imgs/qr.png)

## 主要特点

可进行细粒度的路由控制，例如：

- [旅行路线列表](http://react-coat.spa.teying.vip/photos)
- [旅行路线列表+搜索](http://react-coat.spa.teying.vip/photos?photos-search=%7B%22title%22%3A%22%u6D77%u5929%22%7D)
- [旅行路线详情](http://react-coat.spa.teying.vip/photos/1/comments?comments-search=%7B%22articleId%22%3A%221%22%7D)
- [旅行路线详情+评论列表(最新、第 2 页)](http://react-coat.spa.teying.vip/photos/1/comments?comments-search=%7B%22articleId%22%3A%221%22%2C%22isNewest%22%3Atrue%2C%22page%22%3A2%7D&photos-showComment=true)
- [旅行路线详情+评论详情](http://react-coat.spa.teying.vip/photos/1/comments/16?photos-showComment=true)

## 服务器同构渲染(SSR)

查看：[medux-demo-ssr](https://github.com/wooline/medux-demo-ssr)

## 学习交流

- Email：[wooline@qq.com](wooline@qq.com)
- reac-coat 学习交流 QQ 群：**929696953**，有问题可以在群里问我

  ![QQ群二维码](https://github.com/wooline/react-coat/blob/master/docs/imgs/qr.jpg)

- 欢迎批评指正，觉得还不错的别忘了给个`Star` >\_<，如有错误或 Bug 请反馈
