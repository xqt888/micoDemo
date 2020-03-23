/*
 * @Description:全局接口
 * @Author: xuqiuting
 * @Date: 2019-11-12 16:40:21
 * @LastEditors  : xuqiuting
 * @LastEditTime : 2020-01-08 17:36:23
 */
// 网关验证Cas登录
export const getCasParams = params => {
    return {
      url: `/cas/client/validateLogin`,
      method: "GET",
      params: params
    };
  };