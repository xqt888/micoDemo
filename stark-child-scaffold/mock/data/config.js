/*
 * @Description: 菜单，用户信息模拟数据
 * @Author: xuqiuting
 * @Date: 2019-11-12 13:55:35
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-20 12:05:23
 */
import Mock from "mockjs";

export default {
  init() {
    
     // 单点地址配置
     Mock.mock(/(\/configjson)/, "get", function(options) {
      const reponseMsg = {
        code: 200,
        data:{
          casHref: "http://10.194.188.228:8081",
        }
      };
      return reponseMsg;
    });
  },
};
