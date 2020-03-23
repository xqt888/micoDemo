/*
 * @Description: 基本结构服务配置文件
 * @Author: xuqiuting
 * @Date: 2019-11-12 14:00:38
 * @LastEditors  : xuqiuting
 * @LastEditTime : 2020-01-13 09:46:12
 */
// 获取菜单信息
export const getMenuApi = (params)=>{
    return {
        url: `/sys/permission/getPermissionBySystemId`,
        method: "GET",
        params:params
    }
};

// 获取用户信息
export const getUserApi = (params)=>{
    return {
        url: `/user`,
        method: "POST",
        data:params
    }
};

// 退出登录
export const getCasOut = (params) => {
    return {
      url: `/sys/token/delete`,
      method: "GET",
      params: params
    };
  }
