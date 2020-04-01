/*
 * @Description: 数据质量mock数据
 * @Author: Wenmin He
 * @Date: 2020-03-02 11:03:42
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-03-30 21:11:56
 */

import Mock from "mockjs";
import { getHashParam } from "@/utils/util";

export default {
  init() {
    const generalHeader = [
      {
        title: "规则类型",
        name: "ruleType",
        width: 120,
      },
      {
        title: "规则名称",
        name: "ruleName",
        width: 120,
      },
      {
        title: "规则内容",
        name: "ruleCont",
        width: 180,
      },
      {
        title: "状态",
        name: "status",
        width: 120,
      },
      {
        title: "规则描述",
        name: "ruleDetail",
        width: 120,
      },
      {
        title: "创建人",
        name: "creator",
        width: 120,
      },
      {
        title: "创建时间",
        name: "createTime",
        width: 180,
      }
    ];

    const generalTableData = Mock.mock({
      "list": [
        {
          id: "1",
          "ruleType|1": ["表级规则", "字段级规则"],
          ruleName: "表行数",
          ruleCont: "- -",
          "status|1": ["已启用", "未启用"],
          ruleDetail: "测试测试",
          creator: "@cname",
          createTime: "2020-02-29 10:00"
        },
        {
          id: "2",
          "ruleType|1": ["表级规则", "字段级规则"],
          ruleName: "数据表空值扫描",
          ruleCont: "- -",
          "status|1": ["已启用", "未启用"],
          ruleDetail: "测试测试",
          creator: "@cname",
          createTime: "2020-03-01 11:00"
        },
        {
          id: "3",
          "ruleType|1": ["表级规则", "字段级规则"],
          ruleName: "字段平均值",
          ruleCont: "- -",
          "status|1": ["已启用", "未启用"],
          ruleDetail: "测试测试",
          creator: "@cname",
          createTime: "2020-03-03 15:00"
        },
        {
          id: "4",
          "ruleType|1": ["表级规则", "字段级规则"],
          ruleName: "合法性校验",
          ruleCont: "正则表达式",
          "status|1": ["已启用", "未启用"],
          ruleDetail: "测试测试",
          creator: "@cname",
          createTime: "2020-02-10 22:00"
        },
        {
          id: "5",
          "ruleType|1": ["表级规则", "字段级规则"],
          ruleName: "电话格式校验",
          ruleCont: "正则表达式",
          "status|1": ["已启用", "未启用"],
          ruleDetail: "测试测试",
          creator: "@cname",
          createTime: "2020-02-16 18:00"
        },
      ],
    });

    // 通用规则配置列表数据
    Mock.mock(/(\/quality\/getQualityByPages)/, "post", function (option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 5,
          pages: 1,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: {
            bodies: generalTableData.list,
            headers: generalHeader
          }
        },
      };
    });


    const realTimeHeader = [
      {
        title: "规则名称",
        name: "ruleName",
        width: 120,
      },
      {
        title: "topic",
        name: "topic",
        width: 120,
      },
      {
        title: "应用规则",
        name: "appRules",
        width: 120,
      },
      {
        title: "资产责任人",
        name: "responPerson",
        width: 120,
      },
      {
        title: "创建人",
        name: "creator",
        width: 120,
      },
      {
        title: "状态",
        name: "status",
        width: 120,
      }
    ];

    const realTimeTableData = Mock.mock({
      "list": [
        {
          id: "1",
          ruleName: "质量检查01",
          topic: "topic01",
          appRules: "数据延迟",
          responPerson: "admin",
          creator: "数据管理员",
          "status|1": ["未启动", "运行中", "失败", "成功", "暂停"]
        },
        {
          id: "2",
          ruleName: "质量检查02",
          topic: "topic02",
          appRules: "数据断流",
          responPerson: "admin",
          creator: "数据管理员",
          "status|1": ["未启动", "运行中", "失败", "成功", "暂停"]
        },
        {
          id: "3",
          ruleName: "质量检查03",
          topic: "topic03",
          appRules: "自定义规则",
          responPerson: "admin",
          creator: "数据管理员",
          "status|1": ["未启动", "运行中", "失败", "成功", "暂停"]
        },
        {
          id: "4",
          ruleName: "质量检查04",
          topic: "topic04",
          appRules: "自定义规则",
          responPerson: "admin",
          creator: "数据管理员",
          "status|1": ["未启动", "运行中", "失败", "成功", "暂停"]
        },
      ],
    });

    // 获取列表数据/data/realTimePageData
    Mock.mock(/(\/data\/realTimePageData)/, "post", function (option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 4,
          pages: 1,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: {
            bodies: realTimeTableData.list,
            headers: realTimeHeader
          }
        },
      };
    });


    const offlineHeader = [
      {
        title: "编号",
        name: "num",
        width: 60,
      },
      {
        title: "规则名称",
        name: "ruleName",
        width: 120,
      },
      {
        title: "规则描述",
        name: "ruleDetail",
        width: 180,
      },
      {
        title: "数据模型",
        name: "dataModle",
        width: 120,
      },
      {
        title: "开始时间",
        name: "startTime",
        width: 180,
      },
      {
        title: "结束时间",
        name: "endTime",
        width: 180,
      },
      {
        title: "资产责任人",
        name: "responsible",
        width: 120,
      },
      {
        title: "创建人",
        name: "creator",
        width: 120,
      },
      {
        title: "运行状态",
        name: "status",
        width: 120,
      }
    ];

    const offlineTableData = Mock.mock({
      "list": [
        {
          id: "1",
          num: "01",
          ruleName: "质量检查01",
          ruleDetail: "描述描述描述描述",
          dataModle: "ODS层",
          startTime: "2020-02-22 20:00",
          endTime: "2020-03-04 22:00",
          responsible: "@cname",
          creator: "@cname",
          "status|1": ["未启动", "运行中", "失败", "成功", "暂停"],
          log: "@paragraph"
        },
        {
          id: "2",
          num: "02",
          ruleName: "质量检查02",
          ruleDetail: "描述描述描述描述",
          dataModle: "DWS层",
          startTime: "2019-12-30 11:00",
          endTime: "2020-01-05 21:00",
          responsible: "@cname",
          creator: "@cname",
          "status|1": ["未启动", "运行中", "失败", "成功", "暂停"],
          log: "@paragraph"
        },
        {
          id: "3",
          num: "03",
          ruleName: "质量检查03",
          ruleDetail: "描述描述描述描述描述",
          dataModle: "DWD层",
          startTime: "2019-11-19 17:00",
          endTime: "2020-01-01 10:00",
          responsible: "@cname",
          creator: "@cname",
          "status|1": ["未启动", "运行中", "失败", "成功", "暂停"],
          log: "@paragraph"
        },
        {
          id: "4",
          num: "04",
          ruleName: "质量检查04",
          ruleDetail: "描述描述描述",
          dataModle: "ADS层",
          startTime: "2020-02-19 10:00",
          endTime: "2020-03-04 20:00",
          responsible: "@cname",
          creator: "@cname",
          "status|1": ["未启动", "运行中", "失败", "成功", "暂停"],
          log: "@paragraph"
        },
        {
          id: "5",
          num: "05",
          ruleName: "质量检查05",
          ruleDetail: "描述描述描述描述描述描述",
          dataModle: "ADS层",
          startTime: "2020-01-08 9:00",
          endTime: "2020-01-23 21:00",
          responsible: "@cname",
          creator: "@cname",
          "status|1": ["未启动", "运行中", "失败", "成功", "暂停"],
          log: "@paragraph"
        },
      ],
    });

    // 获取列表数据/data/offlinePageData
    Mock.mock(/(\/data\/offlinePageData)/, "post", function (option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 5,
          pages: 1,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: {
            bodies: offlineTableData.list,
            headers: offlineHeader
          }
        },
      };
    });

    const logHeader = [
      {
        title: "规则名称",
        name: "ruleName",
        width: 120,
      },
      {
        title: "实例状态",
        name: "status",
        width: 120,
      },
      {
        title: "调度周期",
        name: "scheduleCycle",
        width: 120,
      },
      {
        title: "开始时间",
        name: "startTime",
        width: 180,
      },
      {
        title: "结束时间",
        name: "endTime",
        width: 180,
      },
      {
        title: "运行时间",
        name: "operateTime",
        width: 120,
      },
    ];

    const logTableData = Mock.mock({
      "list": [
        {
          id: "1",
          ruleName: "质量检查01",
          "status|1": ["1", "0"],  // 1:成功，0：失败
          scheduleCycle: "15分钟",
          startTime: "2020-01-02 10:00",
          endTime: "2020-02-20 12:00",
          operateTime: "12s",
          log: "@paragraph"
        },
        {
          id: "2",
          ruleName: "质量检查02",
          "status|1": ["1", "0"],  // 1:成功，0：失败
          scheduleCycle: "15分钟",
          startTime: "2020-02-02 20:00",
          endTime: "2020-02-20 13:00",
          operateTime: "15s",
          log: "@paragraph"
        },
        {
          id: "3",
          ruleName: "质量检查03",
          "status|1": ["1", "0"],  // 1:成功，0：失败
          scheduleCycle: "15分钟",
          startTime: "2020-01-12 19:00",
          endTime: "2020-02-14 09:00",
          operateTime: "29s",
          log: "@paragraph"
        }
      ],
    });

    // 获取列表数据/data/logPageData
    Mock.mock(/(\/data\/logPageData)/, "post", function (option) {
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 5,
          pages: 1,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: {
            bodies: logTableData.list,
            headers: logHeader
          }
        },
      };
    });


    // 获取列表数据/data/offlineInfo
    Mock.mock(/(\/data\/offlineInfo)/, "get", function (option) {
      return {
        code: 200,
        msg: "@cparagraph",
        data: {
          stepOneData: {
            ruleName: "质量检查规则",
            ruleDetail: "2020.02.23 12:00创建"
          },
          stepTwoData: [
            {
              isBlock: "1",
              scanRange: "1",
              key: 0,
              dataType: "mysql",
              dataModle: "1",
              ruleType: "1",
              appRule: "1",
              checkRule: "/[0-9]+/",
            },
            {
              isBlock: "0",
              scanRange: "1",
              key: 1,
              dataType: "hive",
              dataModle: "2",
              ruleType: "2",
              appRule: "2",
              checkRule: "/ab*c/",
            }
          ],
          stepThreeData: {
            scheduling: "1",
            notifStrategy: "2",
            timeFormula: "a**+b",
            receiver: "123@qq.com"
          }
        },
      };
    });

  }
}