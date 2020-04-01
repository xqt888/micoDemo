/*
 * @Description:全局接口
 * @Author: xuqiuting
 * @Date: 2019-11-12 16:40:21
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-30 18:09:32
 */
// 网关验证Cas登录
export const getCasParams = params => {
  return {
    url: `/convergeCas/client/validateLogin`,
    method: "GET",
    params: params
  };
};
