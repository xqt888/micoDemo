/*
 * @Description: 状态管理
 * @Author: xuqiuting
 * @Date: 2019-11-05 14:36:49
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-04-01 19:22:22
 */
import Icestore from '@ice/store';
import userProfile from './userProfile';
import menuConfig from './menu';

const icestore = new Icestore();
icestore.registerStore('userProfile', userProfile);
icestore.registerStore('collectMenu', menuConfig);

export default icestore;
