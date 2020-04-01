/*
 * @Description: 菜单，用户信息模拟数据
 * @Author: xuqiuting
 * @Date: 2019-11-12 13:55:35
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-04-01 11:54:55
 */
import Mock from "mockjs";

export default {
  init() {
 // 登录验证/cas/client/validateLogin
//  Mock.mock(/(\/cas\/client\/validateLogin)/, "get", {
//   code: 200,
//   msg: "@cparagraph",
//   result:{
//     userInfo:{
//       realname:"管理员"
//     },
//     departs:{}
//   }
//  })

    // 菜单接口//sys/permission/getPermissionBySystemId
    Mock.mock(/(\/propertySys\/permission\/getPermissionBySystemId)/, "get", {
      code: 200,
      msg: "@cparagraph",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
        result:{
          children: [
            {
              title: "数据治理",
              path: "/dataGovernance",
              external: false,
              newWindow: false,
              id: "Menu_1",
              children: [
                {
                  title: "元模型管理",
                  path: "/dataGovernance/original",
                  icon: "yuanmoxingguanli",
                  id: "Menu_1_1",
                }, {
                  title: "标准化管理",
                  path: "/dataGovernance/standardization",
                  icon: "biaozhunhuaguanli",
                  id: "Menu_1_2",
                  children:[
                    {
                      title: "标准分类",
                      path: "/dataGovernance/standardization/classify",
                      id: "Menu_1_2_1",
                    },
                    {
                      title: "数据标准",
                      path: "/dataGovernance/standardization/data",
                      id: "Menu_1_2_2",
                    },{
                      title: "命名标准",
                      path: "/dataGovernance/standardization/name",
                      id: "Menu_1_2_3",
                    },{
                      title: "字段标准",
                      path: "/dataGovernance/standardization/field",
                      id: "Menu_1_2_4",
                    },
                    // {
                    //   title: "编码标准",
                    //   path: "/dataGovernance/standardization/code",
                    //   id: "Menu_code",
                    // },
                  ]
                }, {
                  title: "元数据",
                  path: "/dataGovernance/sourceData",
                  icon: "yuanshuju",
                  id: "Menu_1_3",
                  children:[
                    {
                      title: "数据编目",
                      path: "/dataGovernance/sourceData/catalog",
                      id: "Menu_1_3_1",
                    },
                    {
                      title: "元数据采集",
                      path: "/dataGovernance/sourceData/collect",
                      id: "Menu_1_3_2",
                    },{
                      title: "数据地图",
                      path: "/dataGovernance/sourceData/map",
                      id: "Menu_1_3_3",
                    }
                  ]
                },
                {
                  title: "模型设计",
                  path: "/dataGovernance/modleDesign",
                  icon: "moxingsheji",
                  id: "Menu_1_4",
                  children:[
                    {
                      title: "数据模型",
                      path: "/dataGovernance/modleDesign/dataModle",
                      id: "Menu_1_4_1"
                    },
                    {
                      title: "标签模型",
                      path: "/dataGovernance/modleDesign/labelModle",
                      id: "Menu_1_4_2"
                    },
                    {
                      title: "预警模型",
                      path: "/dataGovernance/modleDesign/warningModle",
                      id: "Menu_1_4_3"
                    },
                    // {
                    //   title: "指标模型",
                    //   path: "/dataGovernance/modleDesign/indexModle",
                    //   id: "Menu_1_4_4"
                    // }
                  ]
                },
                {
                  title: "数据质量",
                  path: "/dataGovernance/dataQuality",
                  icon: "shujuzhiliang",
                  id: "Menu_1_5",
                  children: [
                    {
                      title: "通用规则配置",
                      path: "/dataGovernance/dataQuality/generalRules",
                      id: "Menu_1_5_1"
                    },
                    {
                      title: "质量检查作业",
                      path: "/dataGovernance/dataQuality/quaInspect",
                      id: "Menu_1_5_2",
                      children: [
                        {
                          title: "离线数据质量检查",
                          path: "/dataGovernance/dataQuality/quaInspect/offlineData",
                          id: "Menu_1_5_2_1"
                        },
                        // {
                        //   title: "实时数据质量检查",
                        //   path: "/dataGovernance/dataQuality/quaInspect/realTimeData",
                        //   id: "Menu_1_5_2_2"
                        // },
                      ]
                    },
                    {
                      title: "质量检查报告",
                      path: "/dataGovernance/dataQuality/insReport",
                      id: "Menu_1_5_3"
                    },
                  ]
                },{
                  title: "数据安全",
                  path: "/dataGovernance/security",
                  icon: "shujuanquan",
                  id: "Menu_1_6",
                  children: [
                    {
                      title: "脱敏算法管理",
                      path: "/dataGovernance/security/desensitizeAlg",
                      id: "Menu_1_6_1"
                    },
                    {
                      title: "脱敏规则应用",
                      path: "/dataGovernance/security/desensitizeRule",
                      id: "Menu_1_6_2"
                    },
                    {
                      title: "数据安全分析",
                      path: "/dataGovernance/security/dataReport",
                      id: "Menu_1_6_4"
                    },
                    {
                      title: "数据权限管理",
                      path: "/dataGovernance/security/authority",
                      id: "Menu_1_6_3",
                      children:[
                        {
                          title: "数据源权限",
                          path: "/dataGovernance/security/authority/data",
                          id: "Menu_1_6_3_1",
                        }, {
                          title: "数据表权限",
                          path: "/dataGovernance/security/authority/table",
                          id: "Menu_1_6_3_2",
                        },{
                          title: "我的权限",
                          path: "/dataGovernance/security/authority/my",
                          id: "Menu_1_6_3_3",
                        },
                      ]
                    }
                  ]
                }
              ],
            },
          ],
        },
    });
  },
};
