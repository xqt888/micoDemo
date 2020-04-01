/*
 * @Description: 元模型管理mock数据
 * @Author: Wenmin He
 * @Date: 2020-02-28 14:57:56
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-03-30 16:38:16
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
                    "icon": "shitu",
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
                    "icon": "shitu",
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
                    "icon": "shitu",
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
                    "icon": "shitu",
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
                    "icon": "shitu",
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
                    "icon": "shitu",
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
                    "icon": "shitu",
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
                "id": 8,
                "name": "pg组",
                "code": "pg",
                "description": "pg组元模型描述",
                "icon": null,
                "type": "2",
                "groupType": "pg",
                "level": "2",
                "isGroup": true,
                "isMetaModel": false,
                "children": [
                  {
                    "id": 81,
                    "name": "表元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "table",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "表元模型",
                    "pid": 81,
                    "key": "81"
                  },
                  {
                    "id": 82,
                    "name": "字段元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "table",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "字段元模型",
                    "pid": 82,
                    "key": "82"
                  },
                  {
                    "id": 83,
                    "name": "分区元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "table",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "分区元模型",
                    "pid": 83,
                    "key": "83"
                  },
                ],
                "label": "pg组",
                "pid": 8,
                "key": "p8"
              },
              {
                "id": 9,
                "name": "ftp组",
                "code": "ftp",
                "description": "ftp组元模型描述",
                "icon": null,
                "type": "2",
                "groupType": "ftp",
                "level": "2",
                "isGroup": true,
                "isMetaModel": false,
                "children": [
                  {
                    "id": 91,
                    "name": "基本信息元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "3",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "基本信息元模型",
                    "pid": 91,
                    "key": "91"
                  },
                  {
                    "id": 92,
                    "name": "字段信息元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "4",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "字段信息元模型",
                    "pid": 92,
                    "key": "92"
                  }
                ],
                "label": "ftp组",
                "pid": 9,
                "key": "p9"
              },
              {
                "id": 10,
                "name": "oracle组",
                "code": "oracle",
                "description": "oracle组元模型描述",
                "icon": null,
                "type": "2",
                "groupType": "orcle",
                "level": "2",
                "isGroup": true,
                "isMetaModel": false,
                "children": [
                  {
                    "id": 91,
                    "name": "表元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "3",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "基本信息元模型",
                    "pid": 101,
                    "key": "101"
                  },
                  {
                    "id": 94,
                    "name": "字段元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "4",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "字段信息元模型",
                    "pid": 104,
                    "key": "104"
                  },
                  {
                    "id": 93,
                    "name": "分区元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "4",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "分区元模型",
                    "pid": 103,
                    "key": "103"
                  }
                ],
                "label": "oracle组",
                "pid": 10,
                "key": "p10"
              },
              {
                "id": 11,
                "name": "Tbase组",
                "code": "Tbase",
                "description": "Tbase组元模型描述",
                "icon": null,
                "type": "2",
                "groupType": "Tbase",
                "level": "2",
                "isGroup": true,
                "isMetaModel": false,
                "children": [
                  {
                    "id": 111,
                    "name": "表元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "3",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "基本信息元模型",
                    "pid": 111,
                    "key": "111"
                  },
                  {
                    "id": 114,
                    "name": "字段元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "4",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "字段信息元模型",
                    "pid": 114,
                    "key": "114"
                  },
                  {
                    "id": 113,
                    "name": "分区元模型",
                    "code": "table",
                    "description": null,
                    "icon": "shitu",
                    "type": "4",
                    "groupType": null,
                    "level": null,
                    "isGroup": false,
                    "isMetaModel": true,
                    "children": [

                    ],
                    "label": "分区元模型",
                    "pid": 113,
                    "key": "113"
                  }
                ],
                "label": "Tbase组",
                "pid": 10,
                "key": "p10"
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
          "icon": "shitu",
          "description": "字段元模型",
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
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
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
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
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
              "isReadOnly": false,
              "isNull": true,
              "showType": "radio",
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
              "isReadOnly": false,
              "isNull": true,
              "showType": "radio",
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
              "isReadOnly": false,
              "isNull": true,
              "showType": "select",
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
              "isReadOnly": false,
              "isNull": true,
              "showType": "numPicker",
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
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
              "isHidden": false,
              "sort": 1
            }
          ]
        }
      }
    })

    // 根据id获取ftp类型--字段信息元模型的详细信息
    Mock.mock(/(ftpField)/, "get", function (option) {
      return {
        code: 200,
        msg: "@cparagraph",
        "data": {
          "id": 14,
          "name": "字段信息元模型",
          "code": "field",
          "belongSystem": "数据汇聚",
          "icon": "shitu",
          "description": "ftp字段信息元模型",
          "tableName": "dc_model_field_001",
          "type": "field",
          "metaModelPkgId": 3,
          "status": null,
          "props": [
            {
              "id": 63,
              "metaModelId": 14,
              "code": "field_name",
              "name": "文件名",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 64,
              "metaModelId": 14,
              "code": "field_desc",
              "name": "描述",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 65,
              "metaModelId": 14,
              "code": "file_split",
              "name": "分割符",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 66,
              "metaModelId": 14,
              "code": "file_path",
              "name": "文件后缀",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 67,
              "metaModelId": 14,
              "code": "file_unicode",
              "name": "文件编码",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
              "isHidden": false,
              "sort": 1
            }
          ]
        }
      }
    })

    // 根据id获取ftp类型--基本信息元模型的详细信息
    Mock.mock(/(ftpBasic)/, "get", function (option) {
      return {
        code: 200,
        msg: "@cparagraph",
        "data": {
          "id": 15,
          "name": "基本信息元模型",
          "code": "field",
          "belongSystem": "数据汇聚",
          "icon": "shitu",
          "description": "ftp基本信息元模型",
          "tableName": "dc_model_field_001",
          "type": "field",
          "metaModelPkgId": 3,
          "status": null,
          "props": [
            {
              "id": 63,
              "metaModelId": 15,
              "code": "field_name",
              "name": "字段名",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 64,
              "metaModelId": 15,
              "code": "field_path",
              "name": "文件路径",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 65,
              "metaModelId": 15,
              "code": "field_comment",
              "name": "字段注释",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 66,
              "metaModelId": 15,
              "code": "field_sort",
              "name": "字段顺序",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "numPicker",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 67,
              "metaModelId": 15,
              "code": "is_primary_key",
              "name": "是否主键",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "radio",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 68,
              "metaModelId": 15,
              "code": "is_null",
              "name": "是否可空",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "radio",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 69,
              "metaModelId": 15,
              "code": "field_length",
              "name": "字段长度",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "numPicker",
              "isHidden": false,
              "sort": 1
            },
            {
              "id": 70,
              "metaModelId": 15,
              "code": "field_name_cn",
              "name": "字段中文名",
              "type": null,
              "length": 100,
              "isReadOnly": false,
              "isNull": true,
              "showType": "input",
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

    Mock.mock(/(\/common\/dict)/, "delete", function (option) {
      return {
        code: 200,
        msg: "删除成功！",
        data: {}
      }
    })

    
  }
}
