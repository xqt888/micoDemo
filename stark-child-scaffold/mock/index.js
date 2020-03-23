/*
 * @Description: 模拟数据入口
 * @Author: xuqiuting
 * @Date: 2019-09-11 10:19:45
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-23 14:30:45
 */
// 使用Mock
import Mock from 'mockjs';
import Config from './data/config'
import globalApi from './data/global';
import Original from "./data/Original";

export default {
  init(){
    Config.init();
    globalApi.init();
    // Original.init();
  },
};
