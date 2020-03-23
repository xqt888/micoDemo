/*
 * @Description: 路由配置
 * @Author: xuqiuting
 * @Date: 2019-11-05 14:36:49
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-23 14:27:29
 */
// 基础布局
import BasicLayout from '@/layouts/BasicLayout';
// 页面路径找不着
import NotFound from '@/components/NotFound';
// 元模型管理
import Original from '@/pages/Original';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/', redirect: '/dataGovernance', exact: true },
      { path: '/dataGovernance', redirect: '/dataGovernance/original', exact: true },
      { path: '/dataGovernance/original', component: Original },
      { component: NotFound },
    ],
  },
];

export default routerConfig;
