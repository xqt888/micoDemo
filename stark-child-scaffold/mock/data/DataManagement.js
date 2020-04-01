/*
 * @Descripttion: 源数据信息表管理模拟数据
 * @version: 
 * @Author: tangyanqing
 * @Date: 2019-11-13 10:00:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-11-27 14:23:39
 */


import Mock from "mockjs";
import { getHashParam } from "@/utils/util";

export default {
  init() {
    //获取源数据表信息树状结构
    Mock.mock(/SourceTreeData/, "get", {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          selectKey: "1",
          "tree|6": [{
              "label|1": ['数据库类型', 'Kafka', 'FTP', 'HTTP', 'HIVE', 'ES'],
              "key|5": "",
              "id|+1": 1,
              "children|5": [{
                  "label|1": ['mysql', 'oracle', 'sqlserver'],
                  "key|5": "",
                  "id|+1": 100
              }]
          }]
        }
    });
    //获取新增源数据表所属主题域下拉列表
    Mock.mock(/themeListMock/, "get", {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: [
          {label: 'aaa', value: 'aaaa'},
          {label: 'bbbb', value: 'bbbb'}
        ]
    });
    //获取新增源数据表数据源下拉列表
    Mock.mock(/dataSourceListMock/, "get", {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: [
          {label: 'aaa', value: 'aaaa'},
          {label: 'bbbb', value: 'bbbb'}
        ]
    });

    //获取新增源数据表源数据表下拉列表
    Mock.mock(/tableListMock/, "get", {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: [
          {label: 'aaa', value: 'aaaa'},
          {label: 'bbbb', value: 'bbbb'}
        ]
    });

    //获取列表数据
    Mock.mock(/sourceDetailMessage/, "get",{
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          "id|+1": 1,
          "title|1": ["源信息名", "数据表名"],
          "titletableName":"mysql_test01",
          "sourceType|1": ["tabPannel", "commonPannal"],
          tabList: [
            {
              type: 'form',
              name: '基本信息',
              key: 1,
              content: [
                {
                  type: "Input",
                  label: "模型名称:",
                  name: "modalName",
                  value: "数据库表模型01"
                },
                {
                  type: "Select",
                  label: "所属数据库:",
                  name: "dataBase",
                  value: "1",
                  options: [
                    {
                      label: "mysql",
                      value: "1"
                    },
                    {
                      label: "oracle",
                      value: "2"
                    },
                    {
                      label: "sqlserver",
                      value: "3"
                    }
                  ]
                },
                {
                  type: "Select",
                  label: "所属主题:",
                  name: "topic",
                  value: "1",
                  options: [
                    {
                      label: "主题01",
                      value: "1"
                    },
                    {
                      label: "主题02",
                      value: "2"
                    }
                  ]
                },
                {
                  type: "Select",
                  label: "挂载点:",
                  name: "point",
                  value: "1",
                  options: [
                    {
                      label: "挂载点01",
                      value: "1"
                    },
                    {
                      label: "挂载点 02",
                      value: "2"
                    }
                  ]
                },
                {
                  type: "Select",
                  label: "编码:",
                  name: "code",
                  value: "1",
                  options: [
                    {
                      label: "编码01",
                      value: "1"
                    },
                    {
                      label: "编码02",
                      value: "2"
                    }
                  ]
                },
                {
                  type: "TextArea",
                  label: "描述:",
                  name: "describe",
                  value: "描述描述描述描述描述描述描述描述描述描述描述描述"
                }
              ]
            },
            {
              type: 'table',
              name: '字段信息',
              key: 2,
              content: [
                
              ]
            }
          ]
        }
    });
  }
};

// 获取列表头部信息
Mock.mock(/ManagementTableHeader/, "get", function(option) {
return {
  code: 200,
  // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
  msg: "@cparagraph",
  data: [
      {
        title: "数据表名",
        name: "name",
        width: 120,
        sortable: false
      },
      {
        title: "数据表中文名",
        name: "tableName",
        width: 120,
        sortable: false
      },
      {
        title: "所属数据库",
        name: "source",
        width: 120,
        sortable: false
      },
      {
        title: "所属主题",
        name: "topic",
        width: 120,
        sortable: false
      },
      {
        title: "创建人",
        name: "createUser",
        width: 120,
        sortable: false
      },
      {
        title: "创建时间",
        name: "createTime",
        width: 120,
        sortable: false
      }
    ]
  };
});

let tableData = Mock.mock({
  "list|10": [
    {
      "id|+1": 1,
      name: "@ctitle(3,6)",
      tableName: "@ctitle(3,6)",
      "key|5": "",
      "source|1": ["hive", "mysql", "http"],
      topic: "@ctitle(3,6)",
      createUser: "@cname",
      createTime: "@dateTime"
    }
  ]
});
let headers = [
  {
    title: "数据表名",
    name: "name",
    dataIndex: "name",
    width: 120,
    sortable: false
  },
  {
    title: "数据表中文名",
    name: "tableName",
    dataIndex: "tableName",
    width: 120,
    sortable: false
  },
  {
    title: "所属数据库",
    name: "source",
    dataIndex: "source",
    width: 120,
    sortable: false
  },
  {
    title: "所属主题",
    name: "topic",
    dataIndex: "topic",
    width: 120,
    sortable: false
  },
  {
    title: "创建人",
    name: "createUser",
    dataIndex: "createUser",
    width: 120,
    sortable: false
  },
  {
    title: "创建时间",
    name: "createTime",
    dataIndex: "createTime",
    width: 120,
    sortable: false
  }
 ]

//获取列表数据
Mock.mock(/SourceTableData/, "get", function(option) {
  let pageNum = getHashParam(option.url, "pageNum");
  return {
    code: 200,
    // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
    msg: "@cparagraph",
    timestamp: "xxx",
    data: {
      total: 20,
      pages: 2,
      pageNum: Number(pageNum),
      pageSize: 10,
      table: {
        headers: headers,
        bodies: tableData.list
      }
    }
  };
});

//获取详情tab
Mock.mock(/detailTabList/, "get", function(option) {
  return {
    code: 200,
    // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
    msg: "@cparagraph",
    timestamp: "xxx",
    data: {
      code: 200,
      msg: "成功",
      data:[
        {
            key: "basic",
            tabName: "基本信息",
          } ,
          {
            key: "word",
            tabName: "字段信息"
        }
      ]
    }
  };
});
let tableData2 = Mock.mock({
  "list|10": [
    {
      "id|+1": 1,
      name: "@ctitle(3,6)",
      tableDescribe: "@csentence()",
    }
  ]
});
let headers2 = [
  {
    title: "名称",
    name: "name",
    dataIndex: "name",
    width: 200,
    sortable: false
  },
  {
    title: "描述",
    name: "tableDescribe",
    dataIndex: "tableDescribe",
    // width: 120,
    sortable: false
  }
 ]
//获取详情
Mock.mock(/detailTableData/, "get", function(option) {
  let pageNum = getHashParam(option.url, "pageNum");
  return {
    code: 200,
    // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
    msg: "@cparagraph",
    timestamp: "xxx",
    data: {
      code: 200,
      msg: "成功",
      data: [
        {
          tabKey: 'word', // 和查tab接口中的key对应
          total: 4, // 无翻页效果就不需要传以下这些
          pageNum: 1,
          pageSize: 10,
          pages: 1,
          table: {
              headers: headers,
              bodies: tableData.list
          }
        },
        {
          tabKey: 'basic', // 和查tab接口中的key对应
          table: {
              headers: headers2,
              bodies: tableData2.list
          }
        }
      ]
    }
  };
});


