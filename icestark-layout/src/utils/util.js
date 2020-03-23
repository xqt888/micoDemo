/*
 * @Description: file content
 * @Author: xuqiuting
 * @Date: 2020-01-08 17:39:10
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-01-08 17:39:26
 */
// 获取url参数
export const getHashParam = (queryString, name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
      queryString = queryString.split("?")[1] || "",
      result = queryString.match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  };