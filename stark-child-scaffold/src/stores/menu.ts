/*
 * @Description: 菜单状态管理
 * @Author: xuqiuting
 * @Date: 2019-11-08 16:41:06
 * @LastEditors: xuqiuting
 * @LastEditTime: 2019-11-12 13:57:47
 */
// 初始化值为一个对象时
  
const menuConfig = sessionStorage.getItem("menuConfig")
  ? JSON.parse(sessionStorage.getItem("menuConfig"))
  : [];

const menuType = sessionStorage.getItem("menuType")
  ? sessionStorage.getItem("menuType")
  : "";

export default {
  menuType: menuType, // 选中的第一级菜单
  menuConfig: menuConfig, // 所有菜单
  // 切换菜单的按钮
  toggleMenu(type) {
    this.menuType = type;
  },
  // 获取菜单
  setMenu (menuConfig) {
    this.menuConfig = menuConfig || [];
  }
};
