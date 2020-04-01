/*
 * @Description: 数据安全mock数据
 * @Author: xuqiuting
 * @Date: 2020-03-02 11:07:00
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-05 19:27:32
 */
import Mock from "mockjs";
import { getHashParam } from "@/utils/util";

export default {
  init() {
    /********************脱敏算法管理************************/
    //获取脱敏算法列表分页
    Mock.mock(/getDesensitizeList/, "get", function(option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 20,
          pages: 2,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: Mock.mock({
            "bodies|10": [
              {
                id: "@id",
                "name|+1": [
                  "身份证号脱敏",
                  "手机号脱敏",
                  "通信地址脱敏",
                  "电子邮箱脱敏",
                  "银行账号脱敏",
                  "微信账号脱敏",
                  "QQ账号脱敏",
                  "企业账号脱敏"
                ],
                creater: "@cname",
                "type|1": ["jar", "sql", "正则表达式"],
                "status|1": ["启用", "停用"],
                "remark|1": ["这里是算法描述"],
                createTime: "2019-"+"@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "算法名称",
                name: "name",
                width: 180
              },
              {
                title: "算法描述",
                name: "remark",
                width: 140
              },
              {
                title: "脱敏方式",
                name: "type",
                width: 120
              },
              {
                title: "当前状态",
                name: "status",
                width: 120
              },
              {
                title: "创建人",
                name: "creater",
                width: 120
              },
              {
                title: "创建时间",
                name: "createTime",
                width: 180
              }
            ]
          })
        }
      };
    });

    // 删除脱敏算法
    Mock.mock(/(deleteDesensitizeById)/, "delete", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {}
    });

    // 删除jar包
    Mock.mock(/(deleteJarById)/, "delete", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {}
    });

    // 新增脱敏算法
    Mock.mock(/(addDesensitizeAlg)/, "post", {
      code: 200,
      msg: "成功"
    });

    // 根据id回显脱敏算法
    Mock.mock(/(getDesensitizeAlgById)/, "post", {
      code: 200,
      msg: "成功",
      data: {
        "name|1": ["身份证号脱敏", "手机号脱敏", "企业账号脱敏"],
        "type|1": ["1"],
        reg: "/^[0-9A-z]$/",
        isStart: true,
        remark: "算法描述"
      }
    });

    // 编辑脱敏算法
    Mock.mock(/(editDesensitizeAlg)/, "post", {
      code: 200,
      msg: "成功"
    });

    /********************脱敏规则应用************************/
    //获取脱敏规则列表分页
    Mock.mock(/getDesensitizeRuleList/, "get", function(option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 20,
          pages: 2,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: Mock.mock({
            "bodies|10": [
              {
                id: "@id",
                "name|+1": "脱敏规则" + "@string('number', 2)",
                "arithmetic|+1": [
                  "身份证号脱敏",
                  "手机号脱敏",
                  "通信地址脱敏",
                  "电子邮箱脱敏",
                  "银行账号脱敏",
                  "微信账号脱敏",
                  "QQ账号脱敏",
                  "企业账号脱敏"
                ],
                creater: "@cname",
                "status|1": ["启用", "停用"],
                "remark|1": ["这里是规则描述"],
                createTime: "2019-"+"@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "规则名称",
                name: "name",
                width: 180
              },
              {
                title: "规则描述",
                name: "remark",
                width: 140
              },
              {
                title: "脱敏算法",
                name: "arithmetic",
                width: 120
              },
              {
                title: "当前状态",
                name: "status",
                width: 120
              },
              {
                title: "责任人",
                name: "creater",
                width: 120
              },
              {
                title: "创建时间",
                name: "createTime",
                width: 180
              }
            ]
          })
        }
      };
    });
    // 删除脱敏规则
    Mock.mock(/(deleteDesensitizeRuleById)/, "delete", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {}
    });
    // 生效或者停用
    Mock.mock(/(changeRuleStatus)/, "get", {
      code: 200,
      msg: "成功"
    });
    // 新增脱敏算法
    Mock.mock(/(addDesensitizeRule)/, "post", {
      code: 200,
      msg: "成功"
    });

    // 根据id回显脱敏算法
    Mock.mock(/(getDesensitizeRuleById)/, "post", {
      code: 200,
      msg: "成功",
      data: {
        "name|1": ["身份证号脱敏", "手机号脱敏", "通信地址脱敏"],
        "arithmetic|1": [1, 2, 3],
        "filedType|1": ["1", "2"],
        commonFiled: "comon",
        "flied|1": [1, 2, 3],
        "class|1": [1, 2],
        "num|1": [1, 2, 3],
        person: "@cname",
        remark: "规则描述"
      }
    });

    // 编辑脱敏算法
    Mock.mock(/(editDesensitizeRule)/, "post", {
      code: 200,
      msg: "成功"
    });

    // 新增获取脱敏算法下拉框
    Mock.mock(/(getArithmeticListParams)/, "get", {
      code: 200,
      msg: "成功",
      "data|3": [
        {
          "id|+1": [1, 2, 3],
          "name|+1": ["身份证号脱敏", "手机号脱敏", "通信地址脱敏"]
        }
      ]
    });
    // 新增获取字段选择下拉框
    Mock.mock(/(getFieldListParams)/, "get", {
      code: 200,
      msg: "成功",
      "data|3": [
        {
          "id|+1": [1, 2, 3],
          "name|+1": ["身份证号脱敏", "手机号脱敏", "通信地址脱敏"]
        }
      ]
    });
    //获取等级下拉框
    Mock.mock(/(getClassListParams)/, "get", {
      code: 200,
      msg: "成功",
      "data|3": [
        {
          "id|+1": [1, 2],
          "name|+1": ["完全脱敏", "部分脱敏"]
        }
      ]
    });
    //获取脱敏位数下拉框
    Mock.mock(/(getNumListParams)/, "get", {
      code: 200,
      msg: "成功",
      "data|3": [
        {
          "id|+1": [1, 2, 3],
          "name|+1": ["前三位", "中间三位", "后三位"]
        }
      ]
    });

    /********************数据权限管理--数据源权限************************/
    //获取数据源类型下拉框
    Mock.mock(/(getSourceTypeParams)/, "get", {
      code: 200,
      msg: "成功",
      "data|3": [
        {
          "id|+1": [1, 2, 3],
          "name|+1": ["mysql", "oracle", "hive"]
        }
      ]
    });
    //数据源权限全部分页列表
    Mock.mock(/getAllSourceListParams/, "get", function(option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 20,
          pages: 2,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: Mock.mock({
            "bodies|10": [
              {
                id: "@id",
                "source|+1": "test" + "@string('number', 2)",
                "type|1": ["mysql", "oracle", "hive"],
                "remark|1": ["数据源描述"],
                createTime: "2019-"+"@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "数据源",
                name: "source",
                width: 180
              },
              {
                title: "数据源类型",
                name: "type",
                width: 140
              },
              {
                title: "数据源描述",
                name: "remark",
                width: 160
              },
              {
                title: "创建时间",
                name: "createTime",
                width: 180
              }
            ]
          })
        }
      };
    });

    //获取授权用户下拉框
    Mock.mock(/(getUserListParams)/, "get", {
      code: 200,
      msg: "成功",
      "data|3": [
        {
          "id|+1": "@id",
          "name|+1": "@cname"
        }
      ]
    });
    //保存授权
    Mock.mock(/(saveAuthorited)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });
    // 回收授权
    Mock.mock(/(recycleAuthorited)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });
    // 根据id查询数据源
    Mock.mock(/(getSourceById)/, "get", {
      code: 200,
      msg: "成功",
      data: {
        "name|1": "test" + "@string('number', 2)",
        "type|1": ["mysql", "oracle", "hive"],
        createTime:"2019-"+"@datetime(MM-dd HH:mm:ss)",
        remark: "这里是数据源的描述内容"
      }
    });
    // 授权保存
    Mock.mock(/(saveApprove)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });
    // 数据源审批分页
    Mock.mock(/getAthorityListParams/, "get", function(option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 20,
          pages: 2,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: Mock.mock({
            "bodies|10": [
              {
                id: "@id",
                "account|+1": "test" + "@string('number', 2)",
                "type|1": ["同步读", "同步写", "同步读 同步写"],
                "validTime|1": "2020-"+'@date("MM-dd")'+ "~" +"2025-"+'@date("MM-dd")',
                approveTime:"2019-"+"@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "账号",
                name: "account",
                width: 180
              },
              {
                title: "权限类型",
                name: "type",
                width: 140
              },
              {
                title: "有效期",
                name: "validTime",
                width: 200
              },
              {
                title: "申请时间",
                name: "approveTime",
                width: 180
              }
            ]
          })
        }
      };
    });

    //获取已授权数据源权限分页
    Mock.mock(/getAuthoritySourceListParams/, "get", function(option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 20,
          pages: 2,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: Mock.mock({
            "bodies|10": [
              {
                id: "@id",
                "source|+1": "test" + "@string('number', 2)",
                "type|1": ["mysql", "oracle", "hive"],
                "remark|1": ["数据源描述"],
                autorityTime: "2019-"+"@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "数据源",
                name: "source",
                width: 180
              },
              {
                title: "数据源类型",
                name: "type",
                width: 140
              },
              {
                title: "数据源描述",
                name: "remark",
                width: 160
              },
              {
                title: "授权时间",
                name: "autorityTime",
                width: 180
              }
            ]
          })
        }
      };
    });

    /********************数据权限管理--数据表权限************************/
    // 获取全部数据源权限分页
    Mock.mock(/getAllTableListParams/, "get", function(option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 20,
          pages: 2,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: Mock.mock({
            "bodies|10": [
              {
                id: "@id",
                "table|+1": "table" + "@string('number', 2)",
                "environment|1": ["生产环境", "开发环境"],
                "remark|1": ["数据表描述"],
                createTime:"2019-"+"@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "数据表",
                name: "table",
                width: 180
              },
              {
                title: "环境",
                name: "environment",
                width: 140
              },
              {
                title: "数据表描述",
                name: "remark",
                width: 160
              },
              {
                title: "创建时间",
                name: "createTime",
                width: 180
              }
            ]
          })
        }
      };
    });

    //新增授权获取字段列表下拉框
    Mock.mock(/(getFiledListParams)/, "get", {
      code: 200,
      msg: "成功",
      "data|3": [
        {
          "id|+1": "@id",
          "name|+1": "字段" + "@string('number', 2)"
        }
      ]
    });
    //保存授权
    Mock.mock(/(saveTableAuthorited)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });
    // 回收授权
    Mock.mock(/(recycleTableAuthorited)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });
    // 根据id查询数据源
    Mock.mock(/(getTableById)/, "get", {
      code: 200,
      msg: "成功",
      data: {
        "name|1": "table" + "@string('number', 2)",
        "type|1": ["查询", "查询 写入", "查询 写入 修改"],
        createTime: "2019-"+"@datetime(MM-dd HH:mm:ss)",
        remark: "这里是数据源的描述内容"
      }
    });
    // 授权保存
    Mock.mock(/(saveTableApprove)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });
    // 数据表审批分页
    Mock.mock(/getTableAthorityListParams/, "get", function(option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 20,
          pages: 2,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: Mock.mock({
            "bodies|10": [
              {
                id: "@id",
                "account|+1": "test" + "@string('number', 2)",
                "type|1": ["查询", "查询 写入", "查询 写入 修改"],
                "validTime|1": "2020-"+"@date(MM-dd)" + "~" + "2025-"+"@date(MM-dd)",
                approveTime: "2018-"+"@datetime(MM-dd HH:mm:ss)",
                autorityTime: "2019-"+"@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "账号",
                name: "account",
                width: 180
              },
              {
                title: "权限类型",
                name: "type",
                width: 140
              },
              {
                title: "有效期",
                name: "validTime",
                width: 200
              },
              {
                title: "申请时间",
                name: "approveTime",
                width: 180
              },
              {
                title: "授权时间",
                name: "autorityTime",
                width: 180
              }
            ]
          })
        }
      };
    });

    //获取已授权数据表权限分页
    Mock.mock(/getAuthorityTableListParams/, "get", function(option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 20,
          pages: 2,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: Mock.mock({
            "bodies|10": [
              {
                id: "@id",
                "table|+1": "table" + "@string('number', 2)",
                "environment|1": ["生产环境", "开发环境"],
                "remark|1": ["数据表描述"],
                autorityTime:"2019-"+"@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "数据表",
                name: "table",
                width: 180
              },
              {
                title: "环境",
                name: "environment",
                width: 140
              },
              {
                title: "数据表描述",
                name: "remark",
                width: 160
              },
              {
                title: "授权时间",
                name: "autorityTime",
                width: 180
              }
            ]
          })
        }
      };
    });

/********************数据权限管理--我的权限************************/
// 我的权限数据源权限
Mock.mock(/getMySourceListParams/, "get", function(option) {
    const pageNum = getHashParam(option.url, "pageNum");
    return {
      code: 200,
      // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
      msg: "@cparagraph",
      data: {
        total: 20,
        pages: 2,
        pageNum: Number(pageNum),
        pageSize: 10,
        table: Mock.mock({
          "bodies|10": [
            {
              id: "@id",
              "source|+1": "test" + "@string('number', 2)",
              "type|1": ["mysql", "oracle", "hive"],
              "authority|1":["同步读  同步写","同步读","同步写"],
              "remark|1": ["数据源描述"],
              validTime:"2020-"+"@datetime(MM-dd HH:mm:ss)",
              createTime: "2019-"+"@datetime(MM-dd HH:mm:ss)"
            }
          ],
          headers: [
            {
              title: "数据源",
              name: "source",
              width: 180
            },
            {
              title: "数据源类型",
              name: "type",
              width: 140
            }, {
                title: "权限类型",
                name: "authority",
                width: 140
              },
            {
              title: "有效期",
              name: "validTime",
              width: 160
            },
            {
              title: "创建时间",
              name: "createTime",
              width: 180
            }
          ]
        })
      }
    };
  });
  //获取权限类型
   Mock.mock(/(getAutorityListParams)/, "get", {
    code: 200,
    msg: "成功",
    "data|2": [
      {
        "id|+1": "@id",
        "name|+1": ["同步读","同步写"]
      }
    ]
  });
   //交还权限
   Mock.mock(/(returnAutority)/, "get", {
    code: 200,
    msg: "成功",
    "data": {}
  });
    //数据源下拉列表
    Mock.mock(/(getSourceListParams)/, "get", {
        code: 200,
        msg: "成功",
        "data|2": [
          {
            "id|+1": "@id",
            "name|+1": "test"+"@string('number', 2)"
          }
        ]
      });
      // 我的权限数据表权限
      Mock.mock(/getMyTableListParams/, "get", function(option) {
        const pageNum = getHashParam(option.url, "pageNum");
        return {
          code: 200,
          // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
          msg: "@cparagraph",
          data: {
            total: 20,
            pages: 2,
            pageNum: Number(pageNum),
            pageSize: 10,
            table: Mock.mock({
              "bodies|10": [
                {
                  id: "@id",
                  "table|+1": "table" + "@string('number', 2)",
                  "enviroment|1":["生产环境","开发环境"],
                  "type|1": ["mysql", "oracle", "hive"],
                  "authority|1":["查询","查询 写入","查询 写入 修改"],
                  "remark|1": ["数据源描述"],
                  validTime:"2020-"+"@datetime(MM-dd HH:mm:ss)",
                  createTime: "2019-"+"@datetime(MM-dd HH:mm:ss)"
                }
              ],
              headers: [
                {
                  title: "数据表",
                  name: "table",
                  width: 180
                },
                {
                  title: "环境",
                  name: "enviroment",
                  width: 140
                }, {
                    title: "权限类型",
                    name: "authority",
                    width: 140
                  },
                {
                  title: "有效期",
                  name: "validTime",
                  width: 160
                },
                {
                  title: "授权时间",
                  name: "createTime",
                  width: 180
                }
              ]
            })
          }
        };
      });
  }
};
