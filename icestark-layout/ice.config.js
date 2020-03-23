/*
 * @Description: file content
 * @Author: xuqiuting
 * @Date: 2020-01-08 11:30:43
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-11 22:01:59
 */
const path = require('path');

module.exports = {
  entry: 'src/index.jsx',
  publicPath: '/',
  plugins: [
    [
      'ice-plugin-fusion',
      {
        themePackage: '@alifd/theme-design-pro',
        themeConfig: {
          // 防止被子应用样式污染
          nextPrefix: 'next-icestark-',
        },
      },
    ],
    [
      'ice-plugin-moment-locales',
      {
        locales: ['zh-cn'],
      },
    ],
  ],
  alias: {
    '@': path.resolve(__dirname, './src/'),
    'public':path.resolve(__dirname, './public/'),
  },
  // devServer: {
  //   historyApiFallback: true,
  // },
  vendor: true,
  minify: true,
  hash: true,
  proxy: {
    '/cas': {
      enable: true,
      pathRewrite: { '^/cas': '/data-manage/cas' },
      target: 'http://10.194.188.228:4002', // 测试环境
    },
    '/sys': {
      enable: true,
      pathRewrite: { '^/sys': '/data-manage/sys' },
      target: 'http://10.194.188.228:4002', // 测试环境
    },
    "/converge":{
      enable: true,
      changeOrigin:true,
      pathRewrite: { '^/converge': '/index.html' },
      // target: 'http://10.194.186.245:31421', // 测试环境
      target:'http://localhost:4444'
    },
    "/dataGovernance":{
      enable: true,
      changeOrigin:true,
      pathRewrite: { '^/dataGovernance': '/index.html' },
      target:'http://localhost:4444'
    },
    "/dataService":{
      enable: true,
      pathRewrite: { '^/dataService': '/index.html' },
      // target: 'http://10.194.186.245:31499', 
      target:'http://localhost:4444'
    },
    '/propertyApi': {
      enable: true,
      pathRewrite: {'^/propertyApi': ''},
         target: 'http://10.194.188.228:15550', // 测试环境
        // target: 'http://10.194.186.245:31498',
        // target: 'http://10.195.244.212:15550',
    },
    '/convergeApi': {
      enable: true,
      pathRewrite: { '^/convergeApi': '/data-collect' },
      target: 'http://10.194.188.228:4002', // 测试环境
    },
    '/api': {
      enable: true,
      pathRewrite: {'^/api': ''},
      target: 'http://10.194.188.228:15550', // 测试环境
        //  target: 'http://10.194.188.228:18880', // 测试环境
        // target: 'http://10.194.186.245:31498',
        // target: 'http://10.195.244.212:15550',
    },
  },
};
