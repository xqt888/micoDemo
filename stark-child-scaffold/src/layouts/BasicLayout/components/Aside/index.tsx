import React, { useState, useEffect } from "react";
import FoundationSymbol from "@icedesign/foundation-symbol";
import { Link, withRouter } from "react-router-dom";
import { Nav } from "@alifd/next";
import stores from "@/stores/index";
import styles from "./index.module.scss";

const SubNav = Nav.SubNav;
const NavItem = Nav.Item;

// 初始化值为一个对象时
interface InitObject {
  [propName: string]: any;
}

/**
 * 二级导航
 */
function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.title)) {
    const childrenItems = getNavMenuItems(item.children);
    if (childrenItems && childrenItems.length > 0) {
      const subNav = (
        <SubNav
          key={item.id}
          icon={
            item.icon ? (
              <FoundationSymbol type={item.icon} size="small" />
            ) : null
          }
          label={<span className="ice-menu-collapse-hide">{item.title}</span>}
        >
          {childrenItems}
        </SubNav>
      );

      return subNav;
    }
    return null;
  }
  const navItem = (
    <NavItem key={item.id}>
      <Link to={item.path}>
        <FoundationSymbol type={item.icon} size="small" /> {item.title}
      </Link>
    </NavItem>
  );
  return navItem;
}

/**
 * 获取菜单项数据
 */
function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.title && !item.hideInMenu)
    .map((item, index) => {
      return getSubMenuOrItem(item, index);
    });
}

const Aside = withRouter(props => {
  const menuObject: InitObject = stores.useStore("menuConfig");
  const { menuType, menuConfig } = menuObject;
  const [menuData, setMenu] = useState([]);
  const { location } = props;
  const { pathname } = location;

  /**
   * 获取默认展开菜单项
   */
  function getDefaultOpenKeys() {
    const { pathname } = location;
    let openKeys = [];
    let selectedKeys = [];
    let data={
      openKeys:[],
      selectedKeys:[]
    }
    if (Array.isArray(menuData)) {
       data=loopData(menuData,pathname,openKeys,selectedKeys);
    }
    return { ...data };
  }

  // 递归拿值
  const loopData = (data,pathname,openKeys,selectedKeys)=>{
    data.map(item => {
      if (item.children) {
        item.children.map(res => {
          if (
            pathname.startsWith(res.path) &&
            pathname.indexOf(res.path) != -1
          ) {
            selectedKeys.push(res.id);
            openKeys.push(item.id);
            loopData(item.children,pathname,openKeys,selectedKeys);
          }
        });
      } else {
        if (
          pathname.startsWith(item.path) &&
          pathname.indexOf(item.path) != -1
        ) {
          selectedKeys.push(item.id);
        }
      }
    })
    return { openKeys, selectedKeys };
  }

  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  // 获取菜单
  useEffect(() => {
    let aside = [];
    if (menuConfig && menuConfig.length > 0 && menuType) {
      aside = menuConfig.filter(item => item.id == menuType)[0].children || [];
    }
    setMenu(aside);
  }, [menuType, menuConfig]);

  useEffect(() => {
    handdleSelect()
  }, [menuData]);

  useEffect(() => {
    handdleSelect()
  }, [pathname]);

  // 处理选中和展开
  const handdleSelect=()=>{
    const { selectedKeys, openKeys } = getDefaultOpenKeys();
    setOpenKeys(openKeys);
    setSelectedKeys(selectedKeys);
  }

  // 选中
  const onSelect = keys => {
    setSelectedKeys(keys);
  };

  const openChange = keys => {
    setOpenKeys(keys);
  };

  return (
    <div
      className={`${styles.iceDesignLayoutAside} ${styles.iceDesignProAside}`}
    >
      <Nav
        style={{ width: "200px" }}
        openMode={"single"}
        triggerType={"click"}
        activeDirection={null}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        defaultSelectedKeys={selectedKeys}
        onSelect={onSelect}
        onOpen={openChange}
      >
        {getNavMenuItems(menuData)}
      </Nav>
    </div>
  );
});

export default Aside;
