/*
 * @Description: 状态管理
 * @Author: xuqiuting
 * @Date: 2019-11-05 14:36:49
 * @LastEditors: xuqiuting
 * @LastEditTime: 2019-12-11 15:04:47
 */
import Icestore from '@ice/store';
import userProfile from './userProfile';
import menuConfig from './menu';

const icestore = new Icestore();
icestore.registerStore('userProfile', userProfile);
icestore.registerStore('menuConfig', menuConfig);

export default icestore;
