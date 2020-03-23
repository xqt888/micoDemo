/*
 * @Description: file content
 * @Author: xuqiuting
 * @Date: 2020-01-08 11:30:43
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-09 16:15:47
 */
// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    exact: true,
    name: "数据汇聚",
    path: "/converge",
    newWindow: false,
  },
  {
    exact: true,
    name: "数据资产",
    path: "/dataGovernance",
    newWindow: false,
  },
  {
    path: "/dataService",
    name: "数据服务",
    exact: true,
    newWindow: false,
  },
];

const asideMenuConfig =  [
  {
    title: "数据源管理",
    path: "/converge/source",
    icon: "ul-list",
    // children: [
    //   { title: 'monitor', path: '/dashboard/monitor', id: 'Menu_581j4' },
    // ],
    id: "Menu_lfrnj",
  },
  {
    title: "源数据表信息管理",
    path: "/converge/data",
    icon: "cascades",
    // children: [{ title: 'general', path: '/table/general', id: 'Menu_33wke' }],
    id: "Menu_uvj06",
  },
  {
    title: "引擎管理",
    path: "/converge/engine",
    icon: "repair",
    id: "Menu_uvj06",
  },
  {
    title: "作业管理",
    path: "/converge/work",
    icon: "home2",
    id: "Menu_uvj06",
  },
  {
    title: "映射规则管理",
    path: "/converge/mapRules",
    icon: "home2",
    id: "Menu_uvj07",
  },
];

export { headerMenuConfig, asideMenuConfig };
