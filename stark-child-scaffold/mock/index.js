/*
 * @Description: 模拟数据入口
 * @Author: xuqiuting
 * @Date: 2019-09-11 10:19:45
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-04-01 18:55:46
 */
// 使用Mock
import Mock from 'mockjs';
import globalApi from './data/global';
import DataManagement from './data/DataManagement';

export default {
  init(){
    globalApi.init();
    // DataManagement.init();
  },
};
