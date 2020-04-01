/*
 * @Description: 作业管理模拟数据
 * @Author: xuqiuting
 * @Date: 2019-09-11 10:19:45
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-03-30 20:39:20
 */

import Mock from "mockjs";
import { getHashParam } from "@/utils/util";

export default {
  init() {
    //公共服务c公共服务assets_standard_status：标准状态； assets_manager：主管部门 ； assets_company：发布单位
    Mock.mock(/(common\/dict)/, "get", function (option) {
      let urlArr = option.url.split("/");
      let type = urlArr[urlArr.length - 1];
      let data = { data: [] };
      if (type == "assets_standard_status") {
        data = Mock.mock({
          "data|2": [
            {
              "value|+1": 1,
              "text|+1": ["废弃", "现行"]
            }
          ]
        });
      } else if (type == "assets_manager") {
        data = Mock.mock({
          "data|2": [
            {
              "value|+1": 1,
              "text|+1": [
                "中国高等教育学会教育数学专业委员会",
                "中国机械工业联合会"
              ]
            }
          ]
        });
      } else if (type == "assets_company") {
        data = Mock.mock({
          "data|2": [
            {
              "value|+1": 1,
              "text|+1": ["国家标准化管理委员会", "国家市场监督管理局"]
            }
          ]
        });

      } else if (type == "data_item_type") {
        data = Mock.mock({
          "data|2": [
            {
              "value|+1": 1,
              "text|+1": ["TEXT", "INT"]
            }
          ]
        });
        //试用对象
      } else if (type == "assets_level") {
        data = Mock.mock({
          "data|2": [
            {
              "value|+1": 1,
              "text|+1": ["教务库", "所有文件"]
            }
          ]
        });
        // 获取命名分隔符
      } else if (type == "assets_separator") {
        data = Mock.mock({
          "data|2": [
            {
              "value|+1": 1,
              "text|+1": ["_", "*"]
            }
          ]
        });
      } else if (type == "groupType") { // 获取组类型
        data = Mock.mock({
          "data|3": [
            {
              "value|+1": ["mysql", "hive", "oracle"],
              "text|+1": ["mysql", "hive", "Oracle"]
            }
          ]
        });
      } else if (type == "dcSystem") {  // 获取所属模块
        data = Mock.mock({
          "data|3": [
            {
              "value|+1": ["1", "2", "3"],
              "text|+1": ["数据汇聚平台", "数据开发平台", "数据服务平台"]
            }
          ]
        });
      } else if (type == "showType") {  // 获取展现方式
        data = Mock.mock({
          "data|4": [
            {
              "value|+1": ["input", "select", "radio", "numPicker"],
              "text|+1": ["输入框", "下拉框", "单选按钮", "数字输入框"]
            }
          ]
        })
      } else if (type == "dataModle") {  // 数据模型列表
        data = Mock.mock({
          "data|4": [
            {
              label: "hive_test01",
              value: "1"
            },
            {
              label: "hive_test02",
              value: "2"
            },
            {
              label: "hive_test03",
              value: "3"
            },
            {
              label: "hive_test04",
              value: "4"
            }
          ]
        })
      }
      return {
        code: 200,
        msg: "成功",
        data: data.data
      };
    });
  }
};
