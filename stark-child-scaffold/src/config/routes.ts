/*
 * @Description: 路由配置
 * @Author: xuqiuting
 * @Date: 2019-11-05 14:36:49
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-04-01 19:21:01
 */
// 基础布局
import BasicLayout from "@/layouts/BasicLayout";
// 页面路径找不着
import NotFound from "@/components/NotFound";
// 数据源管理
import SourceManagement from "@/pages/SourceManagement";

const routerConfig = [
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/converge/configuration/source",
        component: SourceManagement,
        exact: true
      },
      {
        path: "/",
        redirect: "/converge/configuration/source",
        exact: true
      },
      { component: NotFound }
    ]
  }
];

export default routerConfig;
