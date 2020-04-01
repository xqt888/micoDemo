/*
 * @Description: 模拟数据入口
 * @Author: xuqiuting
 * @Date: 2019-09-11 10:19:45
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-04-01 21:16:55
 */
// 使用Mock
import Mock from 'mockjs';
import Config from './data/config'

export default {
  init(){
    Config.init();
  },
};
