import React, { useState, useEffect } from "react";
import { isInIcestark } from '@ice/stark-app';
import stores from "@/stores/index";
import { enquire } from "enquire-js";
import Layout from "@icedesign/layout";
import Header from "./components/Header";
import Aside from "./components/Aside";
import { request } from "@/utils/request";
import { getMenuApi } from "./service";
import Breadcrumb from "./components/Breadcrumb";

// 初始化值为一个对象时
interface InitObject {
  [propName: string]: any;
}

export default function BasicLayout(props) {
  // 用户信息状态管理
  const userProfile: InitObject = stores.useStore("userProfile");
  // 菜单信息状态管理
  const menuObject: InitObject = stores.useStore("menuConfig");
  const [isScreen, setIsScreen] = useState("isDesktop");
  const { menuType, toggleMenu, setMenu } = menuObject;
  /**
   * 注册监听屏幕的变化，可根据不同分辨率做对应的处理
   */
  function enquireScreenRegister() {
    const isMobile = "screen and (max-width: 720px)";
    const isTablet = "screen and (min-width: 721px) and (max-width: 1199px)";
    const isDesktop = "screen and (min-width: 1200px)";

    enquire.register(isMobile, enquireScreenHandle("isMobile"));
    enquire.register(isTablet, enquireScreenHandle("isTablet"));
    enquire.register(isDesktop, enquireScreenHandle("isDesktop"));
  }

  function enquireScreenHandle(type) {
    const handler = {
      match: () => {
        setIsScreen(type);
      }
    };
    return handler;
  }

  useEffect(() => {
    // enquireScreenRegister();
    getMenu();
    // sessionStorage.setItem("props",JSON.stringify(props))
  }, []);
  // 获取菜单
  const getMenu = async () => {
    let type = menuType;
    let params = getMenuApi({ systemId: "dataAssets" });
    let data = (await request(params)) || {};
    const { result } = data;
    console.log(data,"result")
    if (result) {
      if (result && result.children && result.children.length > 0) {
        type = result.children[0].id;
      }
      setMenu(result.children || []);
      sessionStorage.setItem("menuType", type);
      toggleMenu(type);
    }
  };

  return (
    <Layout>
      {
       !isInIcestark() &&  <Layout.Header>
       <Header isMobile={false} />
     </Layout.Header>
      }
      <Layout.Section>
        <Layout.Aside className="layout-aside">
          <Aside isMobile={false}/>
        </Layout.Aside>
        <Layout.Main style={{ padding: "20px 20px 10px" }}>
          <div className="layout-main">
            <Breadcrumb />
            <Layout.Section scrollable>{props.children}</Layout.Section>
          </div>
          {/* <Layout.Footer>
            <Footer />
          </Layout.Footer> */}
        </Layout.Main>
      </Layout.Section>
    </Layout>
  );
}
