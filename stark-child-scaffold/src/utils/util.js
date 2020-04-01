/*
 * @Description: 公共方法
 * @Author: xuqiuting
 * @Date: 2019-11-13 10:33:17
 * @LastEditors: xuqiuting
 * @LastEditTime: 2019-11-26 19:11:25
 */
// 获取元素距离可视区域顶部、左部的距离
export const getOffset = ele => {
  var top = ele.offsetTop;
  var left = ele.offsetLeft;
  while (ele.offsetParent) {
    ele = ele.offsetParent;
    if (window.navigator.userAgent.indexOf("MSTE 8") > -1) {
      top += ele.offsetTop;
      left += ele.offsetLeft;
    } else {
      top += ele.offsetTop + ele.clientTop;
      left += ele.offsetLeft + ele.clientLeft;
    }
  }
  return {
    left: left,
    top: top
  };
};

export const getSize = () => {
  let windowW, windowH, contentH, contentW, scrollT;
  windowH = window.innerHeight;
  windowW = window.innerWidth;
  scrollT = document.documentElement.scrollTop || document.body.scrollTop;
  contentH =
    document.documentElement.scrollHeight > document.body.scrollHeight
      ? document.documentElement.scrollHeight
      : document.body.scrollHeight;
  contentW =
    document.documentElement.scrollWidth > document.body.scrollWidth
      ? document.documentElement.scrollWidth
      : document.body.scrollWidth;
  return { windowW, windowH, contentH, contentW, scrollT };
};

// 获取url参数
export const getHashParam = (queryString, name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
    queryString = queryString.split("?")[1] || "",
    result = queryString.match(reg);
  return result ? decodeURIComponent(result[2]) : null;
};

// 获取url参数
export const getHashParamHref = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
    queryString = window.location.hash.split("?")[1] || "",
    result = queryString.match(reg);
  return result ? decodeURIComponent(result[2]) : null;
};

// 获取随机ID
export const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4();
};