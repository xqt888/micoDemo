/*
 * @Description: 菜单，用户信息模拟数据
 * @Author: xuqiuting
 * @Date: 2019-11-12 13:55:35
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-04-01 19:07:40
 */
import Mock from "mockjs";

export default {
  init() {
    // 单点地址配置
    Mock.mock(/(\/configjson)/, "get", function (options) {
      const reponseMsg = {
        code: 200,
        data: {
          casHref: "http://10.194.188.228:8081",
          websocketUrl: "ws://10.195.244.176:18880/webSocket/engine/indicate/",
        },
      };
      return reponseMsg;
    });

    // 用户接口
    Mock.mock("/user", "post", function (options) {
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
          avatar: "https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png",
          userid: 10001,
        };
      } else {
        reponseMsg.data = {};
      }
      return reponseMsg;
    });

    // 菜单接口/jeecg-boot/sys/permission/getPermissionBySystemId
    Mock.mock(/(\/convergeSys\/permission\/getPermissionBySystemId)/, "get", {
      code: 200,
      msg: "@cparagraph",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      result: {
        children: [{
          title: "汇聚平台",
          path: "/converge",
          external: false,
          newWindow: false,
          id: "Menu_1",
          children: [{
              title: "配置管理",
              path: "/converge/configuration",
              icon: "peizhiguanlixuanzhong",
              id: "Menu_1_1",
              children: [
                {
                  title: "数据源管理",
                  path: "/converge/configuration/source",
                  icon: "ul-list",
                  id: "Menu_1_1_1",
                },
              ],
            }, 
          ],
        }],
      },
    });
  },
};
