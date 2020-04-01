import React, { useEffect, } from "react";
import { isInIcestark } from "@ice/stark-app";
import stores from "@/stores/index";
import { Shell } from "@alifd/next";
import Aside from "./components/Aside";
import { request } from "@/utils/request";
import { getMenuApi } from "./service";
import Breadcrumb from "./components/Breadcrumb";
import Logo from "./components/Logo";
import Action from "./components/Action";

// 初始化值为一个对象时
interface InitObject {
  [propName: string]: any;
}

export default function BasicLayout(props) {
  // 菜单信息状态管理
  const menuObject: InitObject = stores.useStore("collectMenu");
  const { collectMenuType, toggleMenu, setMenu } = menuObject;

  useEffect(() => {
    getMenu();
  }, []);

  // 获取菜单
  const getMenu = async () => {
    let type = collectMenuType;
    let params = getMenuApi({ systemId: "converge" });
    let data = (await request(params)) || {};
    const { result } = data;
    if (result) {
      if (result && result.children && result.children.length > 0) {
        type = result.children[0].id;
      }
      let newMenu = result.children || [];
      setMenu(newMenu);
      sessionStorage.setItem("collectMenu", JSON.stringify(newMenu));
      sessionStorage.setItem("collectMenuType", type);
      toggleMenu(type);
    }
  };

  return (
    <Shell type="dark">
      {!isInIcestark() && (
        <Shell.Branding>
          <Logo />
        </Shell.Branding>
      )}
      {!isInIcestark() && (
        <Shell.Action>
          <Action />
        </Shell.Action>
      )}
      {!isInIcestark() ? (
        <Shell.Navigation direction="ver">
          <Aside isMobile={false} />
        </Shell.Navigation>
      ) : (
        <Shell.Navigation direction="ver" trigger={null}>
          <Aside isMobile={false} />
        </Shell.Navigation>
      )}

      <Shell.AppBar>
        <Breadcrumb />
      </Shell.AppBar>
      <Shell.Content>{props.children}</Shell.Content>
    </Shell>
  );
}
