/*
 * @Description: 模拟数据入口
 * @Author: xuqiuting
 * @Date: 2019-09-11 10:19:45
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-03-28 15:42:02
 */
// 使用Mock
import Mock from 'mockjs';
import Config from './data/config'
import CommonDict from "./data/commonDict";
import TablePage from './data/TablePage';
import globalApi from './data/global';
import Standardization from './data/Standardization'
import SourceData from './data/sourceData'
import ModleDesign from './data/ModleDesign';
import Original from "./data/Original";
import DataSecurity from './data/DataSecurity'
import DataQuality from "./data/DataQuality";

export default {
  init(){
    Config.init();
    globalApi.init();
    CommonDict.init();
    TablePage.init();
    Standardization.init();
    SourceData.init();
    ModleDesign.init();
    Original.init();
    DataSecurity.init();
    DataQuality.init();
  },
};
