/*
 * @Description: 作业管理模拟数据
 * @Author: xuqiuting
 * @Date: 2019-09-11 10:19:45
 * @LastEditors: xuqiuting
 * @LastEditTime: 2019-12-11 15:40:37
 */

import Mock from "mockjs";
import { getHashParam } from "@/utils/util";

export default {
  init() {

    const header=[
        {
          title: "作业名称",
          name: "name",
          width: 120,
        },
        {
          title: "引擎名称",
          name: "engineName",
          width: 120,
        },
        {
          title: "源数据源",
          name: "sourceName",
          width: 120,
        },
        {
          title: "目标数据源",
          name: "targetSourceName",
          width: 120,
        },
        {
          title: "采集模式",
          name: "mode",
          width: 120,
        },
        {
          title: "采集频率",
          name: "frequency",
          width: 120,
        },
        {
          title: "采集策略",
          name: "strategy",
          width: 120,
        },
        {
          title: "运行状态",
          name: "runStatus",
          width: 120,
        },
        {
          title: "最近采集时间",
          name: "updateTime",
          width: 180,
          sortable: true,
        },
      ];
 

    const tableData = Mock.mock({
      "list|15": [
        {
          // 属性 sid 是一个自增数，起始值为 1，每次增 1
          "id|+1": 1,
          // 属性 title 是一个随机长度的标题
          name: "@ctitle(3,6)",
          engineName: "@ctitle(3,6)",
          // 属性 grade 是数组当中的一个值
          "sourceName|1": ["hive", "mysql", "http"],
          "targetSourceName|1": ["hive", "mysql", "http"],
          "mode|1": ["周期", "实时"],
          "frequency|1": ["时", "日", "/"],
          "strategy|1": [0, 1,],
          "runStatus|1": [1, 2, 3],
          updateTime: "@dateTime",
        },
      ],
    });

    // 获取列表数据/job/queryPageData
    Mock.mock(/(\/job\/queryPageData)/, "post", function (option) {
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
          table: {
            bodies:tableData.list,
            headers:header
          }
          ,
        },
      };
    });

    // 获取引擎名称
    Mock.mock(/(\/engine\/queryAll)/, "post", {
      code: 200,
      msg: "@cparagraph",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      "data|1-5": [
        {
          "id|+1": 1,
          name: "@ctitle(3,6)",
        },
      ],
    });

      // 获取源数据源
      Mock.mock(/(sourceInfo\/queryAll)/, "post", {
        code: 200,
        msg: "@cparagraph",
        // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
        "data|1-5": [
          {
            "id|+1": 1,
            name: "@ctitle(3,6)",
          },
        ],
      });
      // 删除
      Mock.mock(/(job)/, "delete", {
        code: 200,
        msg: "成功",
        // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
        data:{}
      });
       // 上线
       Mock.mock(/(job\/startJob)/, "get", {
        code: 200,
        msg: "成功",
        // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
        data:{}
      });
      // 下线
      Mock.mock(/(job\/stopJob)/, "get", {
        code: 200,
        msg: "成功",
        // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
        data:{}
      });
  },
};