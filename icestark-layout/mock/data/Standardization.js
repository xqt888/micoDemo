/*
 * @Description: 作业管理模拟数据
 * @Author: xuqiuting
 * @Date: 2019-09-11 10:19:45
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-03-28 15:34:28
 */

import Mock from "mockjs";
import { getHashParam } from "@/utils/util";

export default {
  init() {

    // 标准分类标准体系
    Mock.mock(/getCategoryListWithoutPage/, "get", {
      code: 200,
      msg: "成功",
      "data|3": [
        {
          "id|+1": [1, 2, 3],
          "name|+1": ["国家标准", "行业标准", "地方标准"]
        }
      ]
    });

    // 标准分类获取列表数据standard/getCategoryList
    Mock.mock(/getCategoryList/, "get", function (option) {
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
                code: "@string('number', 2)",
                "name|1": [
                  "综合、术语学、标准化、文献",
                  "数学、自然科学",
                  "医药卫生技术",
                  "试验",
                  "环保、保健和安全",
                  "计量学和测量、物理现象",
                  "能源和热传导工程",
                  "家用和商用设备、文娱、体育",
                  "货物的包装和调运",
                  "采矿和矿产品",
                  "玻璃和陶瓷工业",
                  "土木工程 ",
                  "食品技术",
                  "精密机械、珠宝"
                ],
                creater: "@cname",
                "series|1": ["国家标准", "行业标准"],
                "remark|1": ["标准分类说明内容"],
                updateTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "编号",
                name: "code",
                width: 120
              },
              {
                title: "标准分类名称",
                name: "name",
                width: 180
              },
              {
                title: "标准体系",
                name: "series",
                width: 120
              },
              {
                title: "标准分类说明",
                name: "remark",
                width: 160
              },
              {
                title: "创建人",
                name: "creater",
                width: 120
              },
              {
                title: "创建时间",
                name: "updateTime",
                width: 180,
                sortable: true
              }
            ]
          })
        }
      };
    });

    //二级分类列表
    Mock.mock(/getCategoryMultilevelClassificationByNames/, "get", function (
      option
    ) {
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
                "code|1-100": 1,
                "name|1": [
                  "字符集和信息编码",
                  "数学、自然科学",
                  "信息技术（IT）综合",
                  "信息技术用语言"
                ],
                creater: "@cname",
                remark: "标准分类说明",
                updateTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "编号",
                name: "code",
                width: 120
              },
              {
                title: "标准分类名称",
                name: "name",
                width: 180
              },
              {
                title: "标准分类说明",
                name: "remark",
                width: 160
              },
              {
                title: "创建人",
                name: "creater",
                width: 120
              },
              {
                title: "创建时间",
                name: "updateTime",
                width: 180,
                sortable: true
              }
            ]
          })
        }
      };
    });

    // 标准分类保存/编辑
    Mock.mock(/(saveCategory)/, "post", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {}
    });

    // 标准分类根据id获取数据
    Mock.mock(/(getCategoryStandardById)/, "get", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {
        id: "@id",
        "name|1": ["机械制造", "医药卫生技术", "数学、自然科学"],
        "code|1-100": 100,
        "parentId|1": [1, 2, 3],
        remarks: "备注内容",
        "parentName|1": ["企业标准", "国家标准", "行业标准"],
        createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
      }
    });

    // 标准分类删除
    Mock.mock(/(delCategory)/, "delete", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {}
    });

    /******************************数据标准*****************************************/

    // 数据标准获取左树数据
    Mock.mock(/(\/standard\/getCategoryTreeList)/, "get", {
      code: 200,
      msg: "@cparagraph",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: Mock.mock({
        key: "@id",
        label: "结果集",
        "children|2-3": [
          {
            "label|+1": ["国家标准", "行业标准", "企业标准"],
            key: "@id",
            "children|2-3": [
              {
                "label|+1": [
                  "综合、术语、文献",
                  "医药卫生技术",
                  "信息技术、办公机械"
                ],
                key: "@id",
                "children|0-3": [
                  {
                    "label|+1": [
                      "字符集和信息编码",
                      "信息技术（IT）综合",
                      "信息技术、办公机械"
                    ],
                    key: "@id"
                  }
                ]
              }
            ]
          }
        ]
      })
    });

    // 字段标准的引用标准
    Mock.mock(/(getStandardListWithoutPages)/, "get", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      "data|3": [{
        "id|+1": 1,
        "name|+1": ["代码", "名称", "级别"],
        remarks: null
      }]
    });

    // 获取数据标准列表数据
    Mock.mock(/(\/standard\/getStandardList)/, "get", function (option) {
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
                "code|+1": ["GB/T" + "@string('number', 8)"],
                // 属性 title 是一个随机长度的标题
                "name|+1": [
                  "学历代码" + "201" + "@string('number', 1)",
                  "院士代码" + "201" + "@string('number', 1)",
                  "从业状况" + "201" + "@string('number', 1)",
                  "人大代表" + "201" + "@string('number', 1)"
                ],
                version:
                  "V" + "@string('number', 1)" + "." + "@string('number', 1)",
                // 属性 grade 是数组当中的一个值
                "status|1": ["现行", "废止"],
                "checkStatus|1": ["审核中", "审核通过", "审核不通过"],
                publishTime: "2019-" + "@datetime(MM-dd HH:mm:ss)",
                operationTime: "2020-" + "@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "标准编号",
                name: "code",
                width: 140
              },
              {
                title: "标准名称",
                name: "name",
                width: 120
              },
              {
                title: "标准版本",
                name: "version",
                width: 120
              },
              {
                title: "标准状态",
                name: "status",
                width: 120
              },
              {
                title: "送审状态",
                name: "checkStatus",
                width: 120
              },
              {
                title: "发布日期",
                name: "publishTime",
                width: 180
              },
              {
                title: "实施日期",
                name: "operationTime",
                width: 180
              }
            ]
          })
        }
      };
    });

    // 数据标准新增/编辑
    Mock.mock(/(saveStandard)/, "post", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {}
    });

    // 数据标准删除
    Mock.mock(/(deleteStandard)/, "delete", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {}
    });

    // 数据标准根据id获取数据
    Mock.mock(/(getStandardById)/, "get", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: Mock.mock({
        id: "@id",
        "name|1": ["学历代码", "院士代码", "从业状况", "人大代表"],
        "code|+1": ["GB/T" + "@string('number', 8)"],
        "standardStatus|1": [1, 2],
        "chargeDeptId|+1": 1,
        "publishUnitId|+1": 1,
        version: "V" + "@string('number', 1)" + "." + "@string('number', 1)",
        publishDate: "2019-" + "@datetime(MM-dd HH:mm:ss)",
        implementDate: "2019-" + "@datetime(MM-dd HH:mm:ss)",
        "dataItemList|1-3": [
          {
            id: "@id",
            "standardId|+1": 1,
            "name|+1": ["代码", "名称", "级别"],
            "enname|+1": function () {
              if (this.name == "代码") {
                return "DM";
              } else if (this.name == "名称") {
                return "MC";
              } else {
                return "JB";
              }
            },
            "isUnique|1": [true, false],
            itemValue: "34",
            "defaultNull|1": [true, false],
            "length|1-100": 100,
            "type|1": [1, 2]
          }
        ],
        "values|1-3": [
          {
            "DM|1-100": 100,
            "MC|+1": ["研究生教育", "博士研究性毕业", "硕士研究生毕业"],
            "JB|+1": ["初级", "中级", "高级"],
            idList: [507, 508, 509]
          }
        ]
      })
    });

    // 数据标准获取版本管理列表
    Mock.mock(/(getVersion)/, "get", {
      code: 200,
      // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
      msg: "@cparagraph",
      "data|10": [
        {
          // 属性 sid 是一个自增数，起始值为 1，每次增 1
          "id|+1": "@id",
          "code|+1": ["GB/T" + "@string('number', 7)"],
          versionNum:
            "V" + "@string('number', 1)" + "." + "@string('number', 1)",
          // 属性 grade 是数组当中的一个值
          "standardStatus|1": [1, 2],
          publishDate: "2019-" + "@datetime(MM-dd HH:mm:ss)",
          implementDate: "2019-" + "@datetime(MM-dd HH:mm:ss)"
        }
      ]
    });

    //数据标准详情获取数据项分页数据
    Mock.mock(/getDataItemPageListByStandardId/, "get", function (option) {
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
            "bodies|3": [
              {
                id: "@id",
                "name|+1": ["代码", "名称", "级别"],
                "enname|+1": function () {
                  if (this.name == "代码") {
                    return "DM";
                  } else if (this.name == "名称") {
                    return "MC";
                  } else {
                    return "JB";
                  }
                },
                "type|+1": [1, 2],
                "isUnique|1": [true, false],
                "defaultNull|1": [true, false],
                createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "数据项名称",
                name: "name",
                width: 140
              },
              {
                title: "英文名称",
                name: "enname",
                width: 120
              },
              {
                title: "类型",
                name: "type",
                width: 120
              },
              {
                title: "是否唯一",
                name: "isUnique",
                width: 160
              },
              {
                title: "是否为空",
                name: "defaultNull",
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

    // 数据标准详情获取数据项编辑
    Mock.mock(/(getStandardDataItemById)/, "get", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: Mock.mock({
        id: "@id",
        "name|+1": ["代码", "名称", "级别"],
        "enname|+1": function () {
          if (this.name == "代码") {
            return "DM";
          } else if (this.name == "名称") {
            return "MC";
          } else {
            return "JB";
          }
        },
        "type|+1": [1, 2],
        "isUnique|1": [true, false],
        "defaultNull|1": [true, false],
        "length|1-100": 100,
        remarks: null
      })
    });

    // 数据标准详情获取数据项新增
    Mock.mock(/(addDataItems)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });

    // 数据标准详情获取数据项编辑
    Mock.mock(/(standard\/editDataItem)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });

    // 数据标准详情获取数据项删除
    Mock.mock(/(standard\/delDataItem)/, "delete", {
      code: 200,
      msg: "成功",
      data: {}
    });

    //数据标准详情获取代码分页数据
    Mock.mock(/getCodeList/, "get", function (option) {
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
            "bodies|3": [
              {
                idList: ["@id", "@id", "@id"],
                "DM|1-100": 100,
                "MC|+1": ["研究生教育", "博士研究性毕业", "硕士研究生毕业"],
                "JB|+1": ["初级", "中级", "高级"]
              }
            ],
            headers: [
              {
                title: "代码",
                name: "DM",
                width: 140
              },
              {
                title: "名称",
                name: "MC",
                width: 120
              },
              {
                title: "级别",
                name: "JB",
                width: 120
              }
            ]
          })
        }
      };
    });
    //根据标准id获取代码表表头
    Mock.mock(/(getDataItemByStandardId)/, "get", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      "data|3": [
        {
          "title|+1": ["代码", "名称", "级别"],
          "name|+1": function () {
            if (this.title == "代码") {
              return "DM";
            } else if (this.title == "名称") {
              return "MC";
            } else {
              return "JB";
            }
          },
          width: 140
        },
      ]
    });
    //根据标准id获取代码详情
    Mock.mock(/(getCodesByIdList)/, "post", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {
        id: "@id",
        "DM|1-100": 100,
        "MC|+1": ["研究生教育", "博士研究性毕业", "硕士研究生毕业"],
        "JB|+1": ["初级", "中级", "高级"]
      }
    });

    // 数据标准详情获取代码新增
    Mock.mock(/(saveCodeList)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });

    // 数据标准详情获取代码编辑
    Mock.mock(/(standard\/updateCodeList)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });

    // 数据标准详情获取代码删除
    Mock.mock(/(standard\/deleteCodesByList)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });

    //命名标准列表获取数据
    Mock.mock(/getNameList/, "get", function (option) {
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
                // 属性 sid 是一个自增数，起始值为 1，每次增 1
                "id|+1": "@id",
                // 属性 title 是一个随机长度的标题
                "name|1": ["数据库命名标准", "文件命名标准", "指标命名标准", "标签命名标准", "ods命名标准"],
                "type|1": ["项目名_层级名_库", "层级_库_表名", "层级_主题_文件名", "层级_主题_index_", "主题_层级_index_", "项目名_层级_文件名", "项目名_文件名"],
                "user|1": ["ODS层", "教务库", "所有文件", "所有指标", "所有标签"],
                creater: "@cname",
                // 属性 grade 是数组当中的一个值
                "status|1": ["待审核", "审核中", "已发布", "已停用"],
                createTime: "2019-" + "@datetime(MM-dd HH:mm:ss)"
              }
            ],
            headers: [
              {
                title: "标准名称",
                name: "name",
                width: 160
              },
              {
                title: "标准格式",
                name: "type",
                width: 160
              },
              {
                title: "适用对象",
                name: "user",
                width: 120
              },
              {
                title: "创建人",
                name: "creater",
                width: 120
              },
              {
                title: "状态",
                name: "status",
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

    //根据id获取单个命名标准
    Mock.mock(/(getNameStandardById)/, "get", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {
        id: "@id",
        "name|1": ["数据库命名标准", "文件命名标准", "指标命名标准", "标签命名标准"],
        "suitableTargetId|+1": 1,
        "separator_id|+1": 1,
        content: null,
        "maxLength|50-100": 100
      }
    });

    // 命名标准保存/编辑
    Mock.mock(/(saveCodeList)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });

    // 命名标准删除
    Mock.mock(/(standard\/delNameStandard)/, "delete", {
      code: 200,
      msg: "成功",
      data: {}
    });

    // 查询字段标准分页
    Mock.mock(/getAssetsStandardField/, "get", function (option) {
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
            "bodies|5": [
              {
                // 属性 sid 是一个自增数，起始值为 1，每次增 1
                "id|+1": "@id",
                // 属性 title 是一个随机长度的标题
                "name|+1": ["用户名", "状态", "姓名", "模型名称", "备注"],
                "code|1": function () {
                  if (this.name == "用户名") {
                    return "USER_NAME";
                  } else if (this.name == "状态") {
                    return "STATUS";
                  } else if (this.name == "姓名") {
                    return "NAME";
                  } else if (this.name == "模型名称") {
                    return "MOD_NAME";
                  } else {
                    return "NOTE";
                  }
                },
                "type|1": ["string", "int"],
                "length|50-100": 100,
                // 属性 grade 是数组当中的一个值
                "status|1": ["待审核", "审核中", "已发布", "已停用"],
                remark: "备注内容"
              }
            ],
            headers: [
              {
                title: "字段名称",
                name: "name",
                width: 160
              },
              {
                title: "字段编码",
                name: "code",
                width: 160
              },
              {
                title: "类型",
                name: "type",
                width: 120
              },
              {
                title: "长度",
                name: "length",
                width: 120
              },
              {
                title: "状态",
                name: "status",
                width: 120
              },
              {
                title: "备注",
                name: "remark",
                width: 180
              }
            ]
          })
        }
      };
    });

    // 根据id获取单个字段标准
    Mock.mock(/(getStandardFieldManagerById)/, "get", {
      code: 200,
      msg: "成功",
      // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
      data: {
        id: "@id",
        "fieldName|1": ["数据库命名标准", "文件命名标准", "指标命名标准", "标签命名标准"],
        "code|1": function () {
          if (this.fieldName == "用户名") {
            return "USER_NAME";
          } else if (this.fieldName == "状态") {
            return "STATUS";
          } else if (this.fieldName == "姓名") {
            return "NAME";
          } else if (this.fieldName == "模型名称") {
            return "MOD_NAME";
          } else {
            return "NOTE";
          }
        },
        "refStandardId": 1,
        "dataItemId": 1,
        "type|1": [1, 2],
        "length|50-100": 100,
        remark: null,
      }
    });

    // 字段标准保存
    Mock.mock(/(saveFieldManager)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });

    // 字段标准编辑
    Mock.mock(/(editFieldManagerById)/, "post", {
      code: 200,
      msg: "成功",
      data: {}
    });

    // // 字段标准删除
    Mock.mock(/(standard\/removeById)/, "delete", {
      code: 200,
      msg: "成功",
      data: {}
    });

    // 字段标准，引用数据项
    Mock.mock(/(standard\/getStandardItemListByStandardId)/, "get", {
      code: 200,
      msg: "成功",
      "data|3": [
        {
          "id|+1": 1,
          "name|+1": ["数据1", "数据2", "数据3"],
          width: 140
        },
      ]
    });
  }
};
