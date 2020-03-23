/*
 * @Description: 元模型管理mock数据
 * @Author: Wenmin He
 * @Date: 2020-02-28 14:57:56
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-02-28 16:14:46
 */

import Mock from "mockjs";
import { getHashParam } from "@/utils/util";

export default {
  init() {
    // 获取元模型树
    Mock.mock(/(\/meta-model-manager\/meta-model\/tree)/, "get", function (option) {
      return {
        code: 200,
        msg: "@cparagraph",
        data: [
          {
            "id": 1,
            "name": "技术元模型",
            "code": "tech",
            "description": "技术元模型描述",
            "icon": null,
            "type": "2",
            "groupType": null,
            "level": "1",
            "isGroup": false,
            "isMetaModel": false,
            "children": [
              {
                "id": 3,
                "name": "mysql组",
                "code": "mysql",
                "description": "mysql组描述",
                "icon": null,
                "type": "2",
                "groupType": "mysql",
                "level": "2",
                "isGroup": true,
                "isMetaModel": false,
                "children": [
                  {
                    "id": 12,
                    "name": "表元模型",
                    "code": "table",
                    "description": null,
                    "icon": null,
                    "type": "table",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "表元模型",
                    "pid": 3,
                    "key": "12"
                  },
                  {
                    "id": 13,
                    "name": "字段元模型",
                    "code": "field",
                    "description": null,
                    "icon": null,
                    "type": "field",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "字段元模型",
                    "pid": 3,
                    "key": "13"
                  },
                  {
                    "id": 14,
                    "name": "索引元模型",
                    "code": "index",
                    "description": null,
                    "icon": null,
                    "type": "index",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "索引元模型",
                    "pid": 3,
                    "key": "14"
                  },
                  {
                    "id": 16,
                    "name": "分区元模型",
                    "code": "partition",
                    "description": "1111",
                    "icon": null,
                    "type": "partition",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "分区元模型",
                    "pid": 3,
                    "key": "16"
                  },
                  {
                    "id": 36,
                    "name": "测试1",
                    "code": "code",
                    "description": "sss",
                    "icon": "shitumoshi",
                    "type": "field",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "测试1",
                    "pid": 3,
                    "key": "36"
                  }
                ],
                "label": "mysql组",
                "pid": 1,
                "key": "p3"
              },
              {
                "id": 4,
                "name": "hive组",
                "code": "hive",
                "description": "hive组元模型描述",
                "icon": null,
                "type": "2",
                "groupType": "hive",
                "level": "2",
                "isGroup": true,
                "isMetaModel": false,
                "children": [
                  {
                    "id": 17,
                    "name": "表元模型",
                    "code": "table",
                    "description": null,
                    "icon": null,
                    "type": "table",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "表元模型",
                    "pid": 4,
                    "key": "17"
                  },
                  {
                    "id": 18,
                    "name": "字段元模型",
                    "code": "field",
                    "description": null,
                    "icon": null,
                    "type": "field",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "字段元模型",
                    "pid": 4,
                    "key": "18"
                  },
                  {
                    "id": 19,
                    "name": "分区元模型",
                    "code": "partition",
                    "description": null,
                    "icon": null,
                    "type": "partition",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "分区元模型",
                    "pid": 4,
                    "key": "19"
                  }
                ],
                "label": "hive组",
                "pid": 1,
                "key": "p4"
              },
              {
                "id": 14,
                "name": "测试包2",
                "code": "ceshi",
                "description": "测试",
                "icon": "shujuku",
                "type": "2",
                "groupType": null,
                "level": "1",
                "isGroup": false,
                "isMetaModel": false,
                "children": [

                ],
                "label": "测试包2",
                "pid": 1,
                "key": "p14"
              },
              {
                "id": 15,
                "name": "测试组2",
                "code": null,
                "description": "ceshi",
                "icon": "shujuku",
                "type": "2",
                "groupType": "postgresql",
                "level": "1",
                "isGroup": true,
                "isMetaModel": false,
                "children": [

                ],
                "label": "测试组2",
                "pid": 1,
                "key": "p15"
              }
            ],
            "label": "技术元模型",
            "pid": -1,
            "key": "p1"
          },
          {
            "id": 2,
            "name": "业务元模型",
            "code": "business",
            "description": "业务元模型描述",
            "icon": null,
            "type": "1",
            "groupType": null,
            "level": "1",
            "isGroup": false,
            "isMetaModel": false,
            "children": [
              {
                "id": 5,
                "name": "汇聚",
                "code": "collect",
                "description": "汇聚描述",
                "icon": null,
                "type": "1",
                "groupType": null,
                "level": "2",
                "isGroup": false,
                "isMetaModel": false,
                "children": [

                ],
                "label": "汇聚",
                "pid": 2,
                "key": "p5"
              },
              {
                "id": 6,
                "name": "开发",
                "code": "dev",
                "description": "开发描述",
                "icon": null,
                "type": "1",
                "groupType": null,
                "level": "2",
                "isGroup": false,
                "isMetaModel": false,
                "children": [
                  {
                    "id": 7,
                    "name": "数仓模型",
                    "code": "dc",
                    "description": "数仓模型描述",
                    "icon": null,
                    "type": "1",
                    "groupType": null,
                    "level": "3",
                    "isGroup": false,
                    "isMetaModel": false,
                    "children": [
                      {
                        "id": 20,
                        "name": "ods元模型",
                        "code": "ods",
                        "description": null,
                        "icon": null,
                        "type": "ods",
                        "groupType": null,
                        "level": null,
                        "isGroup": false,
                        "isMetaModel": true,
                        "children": [

                        ],
                        "label": "ods元模型",
                        "pid": 7,
                        "key": "20"
                      },
                      {
                        "id": 21,
                        "name": "dwd元模型",
                        "code": "dwd",
                        "description": null,
                        "icon": null,
                        "type": "dwd",
                        "groupType": null,
                        "level": null,
                        "isGroup": false,
                        "isMetaModel": true,
                        "children": [

                        ],
                        "label": "dwd元模型",
                        "pid": 7,
                        "key": "21"
                      }
                    ],
                    "label": "数仓模型",
                    "pid": 6,
                    "key": "p7"
                  }
                ],
                "label": "开发",
                "pid": 2,
                "key": "p6"
              }
            ],
            "label": "业务元模型",
            "pid": -1,
            "key": "p2"
          }

        ]
      };
    });

    // 根据id获取元模型
    Mock.mock(/(\/meta-model-manager\/meta-model)/, "get", function (option) {
      return {
        code: 200,
        msg: "@cparagraph",
        "data": {
          "id": 13,
          "name": "字段元模型",
          "code": "field",
          "belongSystem": "数据汇聚",
          "icon": null,
          "description": null,
          "tableName": "dc_model_field_001",
          "type": "field",
          "metaModelPkgId": 3,
          "status": null,
          "props": [
            {
              "id": 63,
              "metaModelId": 13,
              "code": "field_name",
              "name": "字段名",
              "type": null,
              "length": 100,
              "isReadOnly": null,
              "isNull": true,
              "showType": "1",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 64,
              "metaModelId": 13,
              "code": "field_comment",
              "name": "字段注释",
              "type": null,
              "length": 100,
              "isReadOnly": null,
              "isNull": true,
              "showType": "1",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 65,
              "metaModelId": 13,
              "code": "is_primary_key",
              "name": "是否主键",
              "type": null,
              "length": 100,
              "isReadOnly": null,
              "isNull": true,
              "showType": "1",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 66,
              "metaModelId": 13,
              "code": "is_null",
              "name": "是否为空",
              "type": null,
              "length": 100,
              "isReadOnly": null,
              "isNull": true,
              "showType": "1",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 67,
              "metaModelId": 13,
              "code": "field_type",
              "name": "字段类型",
              "type": null,
              "length": 100,
              "isReadOnly": null,
              "isNull": true,
              "showType": "1",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 68,
              "metaModelId": 13,
              "code": "field_length",
              "name": "长度",
              "type": null,
              "length": 100,
              "isReadOnly": null,
              "isNull": true,
              "showType": "1",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 69,
              "metaModelId": 13,
              "code": "field_name_cn",
              "name": "字段中文名",
              "type": null,
              "length": 100,
              "isReadOnly": null,
              "isNull": true,
              "showType": "1",
              "isHidden": false,
              "sort": 1
            }
          ]
        }
      }
    })


    // 保存元模型
    Mock.mock(/(\/meta-model-manager\/meta-model)/, "post", function (option) {
      return {
        code: 200,
        msg: "保存成功！",
        data: {}
      }
    })

    // 修改元模型
    Mock.mock(/(\/meta-model-manager\/meta-model)/, "put", function (option) {
      return {
        code: 200,
        msg: "修改成功！",
        data: {}
      }
    })

    // 删除元模型
    Mock.mock(/(\/meta-model-manager\/meta-model)/, "delete", function (option) {
      return {
        code: 200,
        msg: "删除成功！",
        data: {}
      }
    })

    // 根据字典code获取字典
    Mock.mock(/(\/common\/dict)/, "delete", function (option) {
      return {
        code: 200,
        msg: "删除成功！",
        data: {}
      }
    })
  }
}
