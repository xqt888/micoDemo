/*
 * @Description: 菜单，用户信息模拟数据
 * @Author: xuqiuting
 * @Date: 2019-11-12 13:55:35
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-23 14:12:50
 */
import Mock from "mockjs";

export default {
  init() {
    // 用户接口
    Mock.mock("/user", "post", function(options) {
      const reponseMsg = {
        code: 200,
        msg: "成功",
        data: {},
      };
      const requestParama = JSON.parse(options.body);
      if (
        requestParama.userName === "admin" &&
        requestParama.password === "admin"
      ) {
        reponseMsg.data = {
          name: "淘小宝",
          department: "技术部",
          avatar:
            "https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png",
          userid: 10001,
        };
      } else {
        reponseMsg.data = {};
      }
      return reponseMsg;
    });
  },
};
