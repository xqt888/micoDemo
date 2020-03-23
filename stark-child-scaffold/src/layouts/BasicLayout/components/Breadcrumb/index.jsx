/*
 * @Description: 面包屑
 * @Author: xuqiuting
 * @Date: 2019-12-11 09:47:26
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-07 17:28:50
 */
import React, { useState, useEffect } from "react";
import { Breadcrumb } from "@alifd/next";
import styles from "./index.module.scss";
import { breadcrumbConfig } from "@/config/breadcrumbConfig";
import { Link, withRouter } from "react-router-dom";

const BreadcrumbComponent = withRouter(props => {
  const { location } = props;
  const { pathname } = location;
  const [breadcrumbList, setBreadcrumbList] = useState([]);
  // 获取菜单
  useEffect(() => {
    changeBreadcrumb();
  }, [pathname]);

  // 根据路径选择面包屑
  const changeBreadcrumb = () => {
    let arr = [];
    breadcrumbConfig.some(res => {
      const { children, ...rest } = res;
      if (pathname.indexOf(res.path) != -1) {
        // 判断是只有一个还是有两个
        if (pathname.length > res.path.length && res.children) {
          arr = genenateLoop(res, arr);
        } else {
          arr.push({ ...rest });
        }
      }
    });
    setBreadcrumbList(arr);
  };

  // 循环拿菜单
  const genenateLoop = (res, arr) => {
    const { children, ...rest } = res;
    if (res.children) {
      if (pathname.length > res.path.length) {
        let remark = false;
        res.children.some(item => {
          if (pathname.indexOf(item.path) != -1) {
            arr.push({
              ...rest,
              link: true
            });
            remark = true;
            genenateLoop(item, arr);
          }
        });
        if (!remark) {
          arr.push({
            ...rest
          });
        }
      } else {
        arr.push({
          ...rest
        });
      }
    } else {
      arr.push({
        ...rest
      });
    }
    return arr;
  };

  return (
    <div className={styles.wraper}>
      <Breadcrumb>
        {breadcrumbList.map(res => {
          if (res.link) {
            return (
              <Breadcrumb.Item key={res.id}>
                <Link to={res.path}> {res.name}</Link>
              </Breadcrumb.Item>
            );
          } else {
            return <Breadcrumb.Item key={res.id}>{res.name}</Breadcrumb.Item>;
          }
        })}
      </Breadcrumb>
      <div></div>
    </div>
  );
});

export default BreadcrumbComponent;
