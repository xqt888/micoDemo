/*
 * @Description: 数据模型模拟数据
 * @Author: Wenmin He
 * @Date: 2020-02-06 11:16:54
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-03-31 17:01:21
 */

import Mock from "mockjs";
import { getHashParam } from "@/utils/util";

export default {
  init() {
    const header = [
      {
        title: "名称",
        name: "name",
        width: 120,
      },
      {
        title: "英文名称",
        name: "englishName",
        width: 120,
      },
      {
        title: "类型",
        name: "type",
        width: 120,
      },
      {
        title: "责任人",
        name: "person",
        width: 120,
      },
      {
        title: "创建时间",
        name: "createTime",
        width: 180,
        sortable: false,
      },
    ];


    const tableData1 = Mock.mock({
      "list": [
        {
          "id": "1",
          name: "网格操作点",
          englishName: "tb_ods_grid_operator",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "2",
          name: "密切接触人员登记表模型",
          englishName: "tb_std_wjw_jiechu",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "3",
          name: "人员的社区出入踪迹情况",
          englishName: "tb_dws_human_community_locus",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "4",
          name: "企业解除隔离人员统计",
          englishName: "tb_ads_company_relieve_geli",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "5",
          name: "人员的企业出入踪迹情况",
          englishName: "tb_dws_human_company_locus",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "6",
          name: "健康码信息",
          englishName: "t_dws_qrc_info",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "7",
          name: "网格点治愈信息",
          englishName: "tb_ods_grid_zhiyu",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "8",
          name: "汇总层_采集点信息表",
          englishName: "tb_std_wyj_grid",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "9",
          name: "人员的社区出入踪迹情况",
          englishName: "tb_dw_human_community_locus",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "10",
          name: "人员的社区出入踪迹情况",
          englishName: "tb_ads_company_relieve_geli",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "11",
          name: "密切接触人员登记表模型",
          englishName: "tb_dw_wjw_jiechu",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "12",
          name: "人员的社区出入踪迹情况",
          englishName: "tb_dw_human_community_locus",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "13",
          name: "网格操作点",
          englishName: "tb_dw_grid_operator",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        },
        {
          "id": "14",
          name: "网格点治愈信息",
          englishName: "tb_dw_grid_zhiyu",
          "type|1": ["TBASE"],
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        }
      ],
    });

    const tableData2 = Mock.mock({
      "list": [
        {
          "id": "1",
          name: "自查/疫情上报记录症状信息拓展表模型",
          englishName: "tb_std_wyj_pneumonia_symptom",
          "type": "mysql",
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
        },
        {
          "id": "2",
          name: "自查/疫情上报记录扩展表模型",
          englishName: "tb_std_wyj_pneumonia_extra",
          "type": "oracle",
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
        },
        {
          "id": "3",
          name: "交通卡口检查报告文件",
          englishName: "kk_check_file",
          "type|1": "文件",
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
        },
        {
          "id": "4",
          name: "物资捐赠登记接口",
          englishName: "/propertyApi/data/donation",
          "type": "接口",
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
        },
        {
          "id": "5",
          name: "交通卡口同乘人信息模型",
          englishName: "tb_std_wyj_kk_passenger",
          "type": "mysql",
          person: "数据管理员",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
        },
      ],
    });

    // 获取列表数据/data/queryPageData
    Mock.mock(/(\/data\/queryPageData)/, "post", function (option) {
      const params = JSON.parse(option.body);
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
            bodies: params.type == 0 ? tableData1.list : tableData2.list,
            headers: header
          }
          ,
        },
      };
    });

    // 数据删除
    Mock.mock(/(\/data\/delete)/, "delete", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {}
    });

    const versionHeader = [
      {
        title: "版本号",
        name: "versionNum",
        width: 120,
      },
      {
        title: "版本状态",
        name: "versionStatus",
        width: 120,
      },
      {
        title: "更新时间",
        name: "updateTime",
        width: 180,
      },
      {
        title: "备注",
        name: "remark",
        width: 120,
      }
    ];

    const versionTableData = Mock.mock({
      "list|15": [
        {
          "id|+1": 1,
          "versionNum|+1": 1,
          "versionStatus|1": ["正常", "停用"],
          updateTime: "@dateTime",
          remark: "@cparagraph( 1, 3 )"
        },
      ],
    });

    // 获取列表数据/data/versionData
    Mock.mock(/(\/data\/versionData)/, "post", function (option) {
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
            bodies: versionTableData.list,
            headers: versionHeader
          }
          ,
        },
      };
    });


    const fieldHeader = [
      {
        title: "字段中文名",
        name: "fieldCName",
        width: 120,
      },
      {
        title: "字段英文名",
        name: "fieldName",
        width: 120,
      },
      {
        title: "是否主键",
        name: "isPrimaryKey",
        width: 60,
      },
      {
        title: "是否为空",
        name: "isNull",
        width: 60,
      },
      {
        title: "字段类型",
        name: "fieldType",
        width: 120,
      },
      {
        title: "长度",
        name: "length",
        width: 80,
      },
      {
        title: "精度",
        name: "precision",
        width: 80,
      },
      {
        title: "默认值",
        name: "defaultValue",
        width: 100,
      },
      {
        title: "引用标准",
        name: "refStandard",
        width: 80,
      },
      {
        title: "检查规则",
        name: "checkRule",
        width: 80,
      },
      {
        title: "字段描述",
        name: "fieldDecript",
        width: 150,
      },
      {
        title: "引用标签",
        name: "refRemark",
        width: 120,
      },
      {
        title: "是否共享",
        name: "isShare",
        width: 80,
      },
      {
        title: "是否加密",
        name: "isEncrypt",
        width: 80,
      },
    ];

    const fieldTableData = Mock.mock({
      "list|15": [
        {
          "fieldCName|+1": "字段" + 1,
          "fieldName": "@word(1)",
          "isPrimaryKey|1": ["是", "否"],
          "isNull|1": ["是", "否"],
          "fieldType|1": ["varchar"],
          "length": "@integer(5, 20)",
          "precision": "@integer(1, 3)",
          "defaultValue": "--",
          "refStandard|1": ["国标", "行标"],
          "checkRule|1": ["规则1", "规则2", "规则3"],
          "fieldDecript": "@cparagraph( 1, 3 )",
          "refRemark|1": ["标签1", "标签2", "标签3"],
          "isShare|1": ["是", "否"],
          "isEncrypt|1": ["是", "否"],
        },
      ],
    });

    // 获取列表数据/data/fieldData
    Mock.mock(/(\/data\/fieldData)/, "post", function (option) {
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
            bodies: fieldTableData.list,
            headers: fieldHeader
          }
          ,
        },
      };
    });

    // 获取标签模型的树数据
    Mock.mock(/(\/data\/labelTree)/, "get", function (option) {
      return {
        code: 200,
        msg: "@cparagraph",
        data: [
          {
            id: "1",
            key: "1",
            name: "人员标签",
            value: "1",
            label: "人员标签",
            layer: 1,
            code: "test",
            detail: "测试",
            children: [
              {
                id: "1-01",
                key: "1-01",
                name: "疫情属性",
                value: "1-01",
                label: "疫情属性",
                layer: 2,
                code: "test1",
                detail: "测试1",
                firstLevName: "一级标签01"
              },
              {
                id: "1-02",
                key: "1-02",
                name: "上报属性",
                value: "1-02",
                label: "上报属性",
                layer: 2,
                code: "test2",
                detail: "测试2",
                firstLevName: "一级标签01"
              },
              {
                id: "1-03",
                key: "1-03",
                name: "通行属性",
                value: "1-03",
                label: "通行属性",
                layer: 2,
                code: "test3",
                detail: "测试3",
                firstLevName: "一级标签01"
              }
            ]
          },
          {
            id: "2",
            key: "2",
            name: "社区标签",
            value: "2",
            label: "社区标签",
            layer: 1,
            code: "test111",
            detail: "测试",
            children: [
              {
                id: "2-01",
                key: "2-01",
                name: "地理属性",
                value: "2-01",
                label: "地理属性",
                layer: 2,
                code: "test2",
                detail: "测试22",
                firstLevName: "一级标签02"
              },
              {
                id: "2-02",
                key: "2-02",
                name: "疫情属性",
                value: "2-02",
                label: "疫情属性",
                layer: 2,
                code: "test",
                detail: "",
                firstLevName: "一级标签02"
              },
              {
                id: "2-03",
                key: "2-03",
                name: "出行规模",
                value: "2-03",
                label: "出行规模",
                layer: 2,
                code: "test44",
                detail: "测试323",
                firstLevName: "一级标签02"
              }
            ]
          },
          {
            id: "3",
            key: "3",
            name: "企业标签",
            value: "3",
            label: "企业标签",
            layer: 1,
            code: "tes33t",
            detail: "测试2232",
            children: [
              {
                id: "3-01",
                key: "3-01",
                name: "地理属性",
                value: "3-01",
                label: "地理属性",
                layer: 2,
                code: "test2",
                detail: "测试22",
                firstLevName: "一级标签02",
              },
              {
                id: "3-02",
                key: "3-02",
                name: "疫情属性",
                value: "3-02",
                label: "疫情属性",
                layer: 2,
                code: "test",
                detail: "",
                firstLevName: "一级标签02"
              }
            ]
          }
        ]
      };
    });

    const labelHeader = [
      {
        title: "code",
        name: "code",
        width: 120,
      },
      {
        title: "名称",
        name: "name",
        width: 120,
      },
      {
        title: "类型",
        name: "type",
        width: 120
      },
      {
        title: "业务口径",
        name: "bussCaliber",
        width: 120,
      },
      {
        title: "技术口径",
        name: "techCaliber",
        width: 120,
      },
      {
        title: "标签状态",
        name: "labelStatus",
        width: 120
      },
    ];


    // const labelTableData = Mock.mock({
    //   "list|5": [
    //     {
    //       "id|1": "@id",
    //       code: "@string(upper, 4)",
    //       "name|1": ["确诊","治愈","疑似","红码","黄码","正常","发烧","感冒","无案例","少量确诊","大量确诊"],
    //       "type|1": ["事实标签", "模型标签", "预测标签"],
    //       bussCaliber: "业务口径",
    //       "techCaliber|1": ["实时计算", "离线调度"],
    //       "labelStatus|1": ["审核中", "待审核", "已审核"],
    //       children: [
    //         {
    //           id: "101",
    //           code: "@string(upper, 4)",
    //           name: "标签_1_01"
    //         },
    //         {
    //           id: "102",
    //           code: "@string(upper, 4)",
    //           name: "标签_1_02"
    //         }
    //       ]
    //     }
    // {
    //   "id": "2",
    //   code: "@string(upper, 4)",
    //   name: "治愈",
    //   "type|1": ["事实标签", "模型标签", "预测标签"],
    //   bussCaliber: "业务口径",
    //   "techCaliber|1": ["实时计算", "离线调度"],
    //   "labelStatus|1": ["审核中", "待审核", "已审核"],
    //   children: [
    //     {
    //       id: "201",
    //       code: "@string(upper, 4)",
    //       name: "标签_2_01"
    //     }
    //   ]
    // },
    // {
    //   "id": "3",
    //   code: "@string(upper, 4)",
    //   name: "疑似",
    //   "type|1": ["模型标签"],
    //   bussCaliber: "业务口径",
    //   "techCaliber|1": ["实时计算", "离线调度"],
    //   "labelStatus|1": ["审核中", "待审核", "已审核"],
    //   children: [
    //     {
    //       id: "301",
    //       code: "@string(upper, 4)",
    //       name: "标签_3_01"
    //     },
    //     {
    //       id: "302",
    //       code: "@string(upper, 4)",
    //       name: "标签_3_02"
    //     },
    //     {
    //       id: "303",
    //       code: "@string(upper, 4)",
    //       name: "标签_3_03"
    //     },
    //   ]
    // },
    // {
    //   "id": "4",
    //   code: "@string(upper, 4)",
    //   name: "红码",
    //   "type|1": ["模型标签"],
    //   bussCaliber: "业务口径",
    //   "techCaliber|1": ["实时计算", "离线调度"],
    //   "labelStatus|1": ["审核中", "待审核", "已审核"],
    //   children: []
    // },
    // {
    //   "id": "5",
    //   code: "@string(upper, 4)",
    //   name: "黄码",
    //   "type|1": ["事实标签", "模型标签", "预测标签"],
    //   bussCaliber: "业务口径",
    //   "techCaliber|1": ["实时计算", "离线调度"],
    //   "labelStatus|1": ["审核中", "待审核", "已审核"],
    //   children: []
    // }
    //   ],
    // });

    // 获取列表数据/data/labelTableData
    Mock.mock(/(\/data\/labelTableData)/, "post", function (option) {
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
          table: Mock.mock({
            "bodies|5": [
              {
                "id|1": "@id",
                code: "@string(upper, 4)",
                "name|1": ["确诊", "治愈", "疑似", "红码", "黄码", "正常", "发烧", "感冒", "无案例", "少量确诊", "大量确诊"],
                "type|1": ["事实标签", "模型标签", "预测标签"],
                bussCaliber: "业务口径",
                "techCaliber|1": ["实时计算", "离线调度"],
                "labelStatus|1": ["审核中", "待审核", "已审核"],
                "children|2": [
                  {
                    id: "@id",
                    code: "@string(upper, 4)",
                    "name|+1": ["哈尔滨","齐齐哈尔","大兴安岭","鸡西","绥化"]
                  }
                ]
              },
            ],
            headers: labelHeader
          })

        },
      };
    });

    // 获取标签模型的数据库表
    Mock.mock(/(\/data\/dataBase)/, "get", function (option) {
      return {
        code: 200,
        msg: "@cparagraph",
        data: [
          {
            id: "1",
            value: "1",
            label: "A层级数据表1",
            children: [
              {
                id: "1-01",
                value: "1-01",
                label: "B层级数据表1",
                children: [
                  {
                    id: "1-01-01",
                    value: "1-01-01",
                    label: "C层级数据表1",
                    key: "1-01-01"
                  },
                  {
                    id: "1-01-02",
                    value: "1-01-02",
                    label: "C层级数据表2",
                    key: "1-01-02"
                  }
                ]
              },
              {
                id: "1-02",
                value: "1-02",
                label: "B层级数据表2",
                children: [
                  {
                    id: "1-02-01",
                    value: "1-02-01",
                    label: "C层级数据表1",
                    key: "1-02-01",
                  },
                  {
                    id: "1-02-02",
                    value: "1-02-02",
                    label: "C层级数据表2",
                    key: "1-02-02"
                  },
                  {
                    id: "1-02-03",
                    value: "1-02-03",
                    label: "C层级数据表3",
                    key: "1-02-03"
                  },
                ]
              },
              {
                id: "1-03",
                value: "1-03",
                label: "B层级数据表3",
                children: [
                  {
                    id: "1-02-01",
                    value: "1-02-01",
                    label: "C层级数据表1",
                    key: "1-02-01"
                  },
                  {
                    id: "1-02-02",
                    value: "1-02-02",
                    label: "C层级数据表2",
                    key: "1-02-02"
                  },
                  {
                    id: "1-02-03",
                    value: "1-02-03",
                    label: "C层级数据表3",
                    key: "1-02-03"
                  }
                ]
              }
            ]
          }
        ]
      };
    });


    // 获取标签模型的数据库表
    Mock.mock(/(\/data\/fieldList)/, "get", function (option) {
      return {
        code: 200,
        msg: "@cparagraph",
        // data:Mock.mock({
        //     "data|3":[
        //       {
        //         "id|1": ["field1","field2","field3"],
        //         "value|1": ["field1","field2","field3"],
        //         "label|1": ["字段1","字段","字段3"]
        //       }
        //     ]
        // })

        data: [
          {
            id: "field1",
            value: "field1",
            label: "字段1"
          },
          {
            id: "field2",
            value: "field2",
            label: "字段2"
          },
          {
            id: "field3",
            value: "field3",
            label: "字段3"
          }
        ]
      };
    });

    const warnHeader = [
      {
        title: "名称",
        name: "name",
        width: 120,
      },
      {
        title: "模型ID",
        name: "modleId",
        width: 120,
      },
      {
        title: "主题域",
        name: "themeField",
        width: 120,
      },
      {
        title: "数据来源",
        name: "dataSource",
        width: 120,
      },
      {
        title: "预警数据输出端",
        name: "dataOutput",
        width: 120,
      },
      {
        title: "创建时间",
        name: "createTime",
        width: 180,
        sortable: false,
      },
      {
        title: "预警描述",
        name: "warnDetail",
        width: 180,
      },
      {
        title: "预警状态",
        name: "warnType",
        width: 120,
      }
    ];


    const warnTableData = Mock.mock({
      "list": [
        {
          id: "1",
          name: "连续0确诊天数",
          modleId: "yi_continue0_day",
          themeField: "主题域02",
          themeFieldValue: "2",
          dataSource: "tb_ods_continue0_day",
          dataOutput: "tb_ods_continue0",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
          warnDetail: "连续0确诊天数",
          "warnType|1": ["1", "2", "3"]
        },
        {
          id: "2",
          name: "红码人数预警",
          modleId: "yi_redcolor_threshoId",
          themeField: "主题域01",
          themeFieldValue: "1",
          dataSource: "tb_ods_redcolor",
          dataOutput: "tb_yi_redcolor",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
          warnDetail: "红码人数预警",
          "warnType|1": ["1", "2", "3"]
        },
        {
          id: "3",
          name: "疫区数量预警",
          modleId: "yi_qzarea_threshoId",
          themeField: "主题域03",
          themeFieldValue: "3",
          dataSource: "tb_ods_qzarea",
          dataOutput: "tb_yi_qzarea",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
          warnDetail: "疫区数量预警",
          "warnType|1": ["1", "2", "3"]
        },
        {
          id: "4",
          name: "体温异常预警",
          modleId: "yi_temp_threshold",
          themeField: "主题域01",
          themeFieldValue: "1",
          dataSource: "tb_ods_tempo",
          dataOutput: "tb_yi_tempo",
          createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
          warnDetail: "体温异常预警",
          "warnType|1": ["1", "2", "3"]
        },
      ],
    });

    // 获取列表数据/data/warningTableData
    Mock.mock(/(\/data\/warningTableData)/, "post", function (option) {
      const params = JSON.parse(option.body);
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
            bodies: params.filterVal == "0" ? warnTableData.list :
              warnTableData.list.filter((item) => {
                return item.themeFieldValue === params.filterVal
              }),
            headers: warnHeader
          }
          ,
        },
      };
    });

    const indexHeader = [
      {
        title: "指标名称",
        name: "name",
        width: 120,
      },
      {
        title: "指标代码",
        name: "indexCode",
        width: 120,
      },
      {
        title: "指标类型",
        name: "indexType",
        width: 120,
      },
      {
        title: "主题域",
        name: "themeField",
        width: 120,
      },
      {
        title: "来源",
        name: "dataSource",
        width: 120,
      },
      {
        title: "创建时间",
        name: "createTime",
        width: 180,
        sortable: false,
      },
      {
        title: "指标描述",
        name: "indexDetail",
        width: 180,
      },
      {
        title: "指标状态",
        name: "indexStatus",
        width: 120,
      }
    ];


    const indexTableData = Mock.mock({
      "list": [
        {
          id: "1",
          name: "指标01",
          indexCode: "text_01",
          "indexType|1": ["数值类", "金融类", "比率类"],
          "themeField": "主题域1",
          "themeFieldValue": "1",
          dataSource: "table_finwire",
          createTime: "@dateTime",
          "indexDetail|2-8": "测试",
          "indexStatus|1": ["1", "2", "3"]
        },
        {
          id: "2",
          name: "指标02",
          indexCode: "text_02",
          "indexType|1": ["数值类", "金融类", "比率类"],
          "themeField": "主题域2",
          "themeFieldValue": "2",
          dataSource: "table_finwire",
          createTime: "@dateTime",
          "indexDetail|2-8": "测试",
          "indexStatus|1": ["1", "2", "3"]
        },
        {
          id: "3",
          name: "指标03",
          indexCode: "text_03",
          "indexType|1": ["数值类", "金融类", "比率类"],
          "themeField": "主题域3",
          "themeFieldValue": "3",
          dataSource: "table_finwire",
          createTime: "@dateTime",
          "indexDetail|2-8": "测试",
          "indexStatus|1": ["1", "2", "3"]
        },
        {
          id: "4",
          name: "指标04",
          indexCode: "text_04",
          "indexType|1": ["数值类", "金融类", "比率类"],
          "themeField": "主题域2",
          "themeFieldValue": "2",
          dataSource: "table_finwire",
          createTime: "@dateTime",
          "indexDetail|2-8": "测试",
          "indexStatus|1": ["1", "2", "3"]
        }
      ],
    });


    // 获取列表数据/data/indexTableData
    Mock.mock(/(\/data\/indexTableData)/, "post", function (option) {
      const params = JSON.parse(option.body);
      const pageNum = getHashParam(option.url, "pageNum");
      return {
        code: 200,
        // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
        msg: "@cparagraph",
        data: {
          total: 3,
          pages: 1,
          pageNum: Number(pageNum),
          pageSize: 10,
          table: {
            bodies: params.filterVal == "0" ? indexTableData.list :
              indexTableData.list.filter((item) => {
                return item.themeFieldValue === params.filterVal
              }),
            headers: indexHeader
          }
          ,
        },
      };
    });

    // 获取标签模型编辑回显数据
    Mock.mock(/(\/data\/labelInfo)/, "get", function (id) {
      return {
        code: 200,
        msg: "@cparagraph",
        data: {
          labelBody: "field2",
          labelTimeliness: "2",
          techCaliber: "1",
          labelType: "2",
          validDate: 3,
          attMethod: "1",
          bussCaliber: "测试测试",
          labelList: [
            {
              labelName: "11",
              labelCode: "111"
            },
            {
              labelName: "22",
              labelCode: "22"
            }
          ],
          fatherLabel: "1-02",
          dataBaseSheet: "1-01-01",
          storageSheet: "1-01-01"
        }
      };
    });

  },
};