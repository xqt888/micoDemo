/*
 * @Description: file content
 * @Author: xuqiuting
 * @Date: 2019-11-06 14:50:43
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-04-01 12:45:54
 */
const path = require('path');

const publicPath = "./";
// if(process.env.NODE_ENV=="production"){
//   publicPath="http://10.194.186.245:31421/";
// }

module.exports = {
  entry: 'src/index.tsx',
  publicPath:'/',
  // devPublicPath: "http://localhost:4444/",
  alias: {
    '@': path.resolve(__dirname, './src/'),
    "public": path.resolve(__dirname, './public/'),
  },
  plugins: [
    ['ice-plugin-fusion', {
      // themePackage: '@icedesign/theme',
      themePackage: '@alifd/theme-12357',
    }],
    ['ice-plugin-css-assets-local', {
      outputPath: 'assets',
      relativeCssPath: '../'
    }],
  ],
  chainWebpack: config => {
    // 修改对应 css module的 loader，默认修改 scss-module 同理可以修改 css-module 和 less-module 规则
    ['scss-module'].forEach(rule => {
      if (config.module.rules.get(rule)) {
        config.module
          .rule(rule)
          .use('ts-css-module-loader')
          .loader(require.resolve('css-modules-typescript-loader'))
          .options({
            modules: true,
            sass: true,
          }); // 指定应用loader的位置

        config.module
          .rule(rule)
          .use('ts-css-module-loader')
          .before('css-loader');
      }
    });
  },
  vendor: true,
  minify: true,
  hash: true,
   // 修改 devServer 配置
   devServer: {
    historyApiFallback: true,
  },
   mock: true,
    proxy: {
    '/convergeCas': {
      enable: true,
      pathRewrite: { '^/convergeCas': '/data-manage/cas' },
      // target: 'http://10.195.244.138:4002',
      target: 'http://10.194.188.228:4002', // 测试环境
      // target: 'http://10.195.244.16:4002',// 刘凯
    },
    '/convergeSys': {
      enable: true,
      pathRewrite: { '^/convergeSys': '/data-manage/sys' },
      // target: 'http://10.195.244.138:4002',
      target: 'http://10.194.188.228:4002', // 测试环境
      // target: 'http://10.195.244.16:4002',// 刘凯
    },
    '/convergeApi': {
      enable: true,
      // target: 'http://10.195.244.176:18880/', // 林熙水
      // /data-collect
      pathRewrite: { '^/convergeApi': '' },
      // pathRewrite: {'^/api': '/data-collect'},
      // target: 'http://10.195.244.9:18880',// 庆珲
      // target: 'http://10.194.186.228:18880',
      target: 'http://10.194.188.228:18880', // 测试环境
      // target: 'http://10.195.244.249:18880', // 家胜
      // target: 'http://10.195.244.16:4002',// 刘凯
      // target: 'http://10.195.244.231:18880/',// 福强

    },
  },
};
