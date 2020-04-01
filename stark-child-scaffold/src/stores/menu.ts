/*
 * @Description: 菜单状态管理
 * @Author: xuqiuting
 * @Date: 2019-11-08 16:41:06
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-27 09:50:21
 */
// 初始化值为一个对象时
  
const collectMenu = sessionStorage.getItem("collectMenu")
  ? JSON.parse(sessionStorage.getItem("collectMenu"))
  : [];

const collectMenuType = sessionStorage.getItem("collectMenuType")
  ? sessionStorage.getItem("collectMenuType")
  : "";

export default {
  collectMenuType: collectMenuType, // 选中的第一级菜单
  collectMenu: collectMenu, // 所有菜单
  // 切换菜单的按钮
  toggleMenu(type) {
    this.collectMenuType = type;
  },
  // 获取菜单
  setMenu (collectMenu) {
    this.collectMenu = collectMenu || [];
  }
};
