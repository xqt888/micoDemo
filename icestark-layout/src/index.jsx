import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from '@alifd/next';
import './global.scss'

// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
// import '@alifd/next/reset.scss';
import App from './App';
import mock from '../mock/index.js'
//挂载 Mock
if(process.env.NODE_ENV!="production"){
 
  mock.init()
}

const ICESTARK_CONTAINER = document.getElementById('icestark-container');

if (!ICESTARK_CONTAINER) {
  throw new Error('当前页面不存在 <div id="icestark-container"></div> 节点.');
}

ReactDOM.render(
  <ConfigProvider prefix="next-icestark-">
    <App />
  </ConfigProvider>,
  ICESTARK_CONTAINER,
);
