/*
 * @Description: file content
 * @Author: xuqiuting
 * @Date: 2019-11-05 14:36:49
 * @LastEditors: xuqiuting
 * @LastEditTime: 2019-11-27 10:37:26
 */
interface InitObject {
  [propName: string]: any;
}

const userinfo = sessionStorage.getItem("userinfo")
  ? JSON.parse(sessionStorage.getItem("userinfo"))
  : {};
  const departs = sessionStorage.getItem("departs")
  ? JSON.parse(sessionStorage.getItem("departs"))
  : [];

let userData: InitObject = {
  userinfo: userinfo,
  departs:departs,

  async fetchData(data,departs) {
    this.userinfo = data;
    this.departs=departs
  }
};
export default userData;
