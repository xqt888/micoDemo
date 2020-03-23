import React from "react";
import { Nav ,Dropdown, Menu } from "@alifd/next";
import FoundationSymbol from "@icedesign/foundation-symbol";
import { Link, withRouter } from "react-router-dom";
import stores from "@/stores/index";
import { request } from "@/utils/request";
import { getCasOut } from "../../service";
import Logo from "../Logo";

import styles from "./index.module.scss";
import urlParse from "url-parse";
const urlQuery = urlParse(location.href, true).query || {};

// 初始化值为一个对象时
interface InitObject {
  [propName: string]: any;
}

function Header(props) {
  const userProfile: InitObject = stores.useStore("userProfile");
  const menuObject: InitObject = stores.useStore("menuConfig");
  const { menuConfig, toggleMenu } = menuObject;

  async function handleLogout() {
    try {
      let token = sessionStorage.getItem("token");
      let params = getCasOut({ token });
      let response = await request(params);
      if (response && response.code == 200) {
        let query="";
        if (urlQuery.port) {
          query=`?port=${urlQuery.port}`
        }
        sessionStorage.removeItem("token");
        let casHref = sessionStorage.getItem("casHref");
        let href = window.location.protocol + "//" + window.location.host;
        window.location.href = `${casHref}/cas/logout?service=${encodeURIComponent(href+query)}`;
      }
    } catch (err) {
      console.error(err);
    }
  }

  const { userinfo } = userProfile;
  const { realname } = userinfo;

  // 设置侧边栏
  const setMenu = id => {
    sessionStorage.setItem("menuType", id);
    toggleMenu(id);
  };

  return (
    <div className={styles.iceDesignLayoutHeader}>
      <div className={styles.headerLeft}>
        <Logo />
        {menuConfig && menuConfig.length > 1 ? (
          <div className={styles.iceDesignLayoutHeaderMenu}>
            <Nav
              className="basic-nav"
              direction="hoz"
              type="primary"
              triggerType="hover"
              activeDirection="bottom"
            >
              {menuConfig.map((nav: any, idx) => {
                const linkProps: InitObject = {};
                if (nav.newWindow) {
                  linkProps.href = nav.path;
                  linkProps.target = "_blank";
                } else if (nav.external) {
                  linkProps.href = nav.path;
                } else {
                  linkProps.to = nav.path;
                }
                const item = (
                  <Nav.Item key={idx} onClick={() => setMenu(nav.id)}>
                    {linkProps.to ? (
                      <Link {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                        ) : null}{" "}
                        {nav.title}
                      </Link>
                    ) : (
                      <a {...linkProps}>
                        {nav.icon ? (
                          <FoundationSymbol type={nav.icon} size="small" />
                        ) : null}{" "}
                        {nav.title}
                      </a>
                    )}
                  </Nav.Item>
                );
                return item
              })}
            </Nav>
          </div>
        ) : null}
      </div>
      {/* Header 菜单项 begin */}
      <div className={styles.headerRight}>
        {/* Header 菜单项 end */}
        <div className={styles.headerAction}>
          <Dropdown
            trigger={
              <label >
                <img src={require("public/imgs/autor.png")} className={styles.account}/>
             <span style={{color:"#fff",verticalAlign:"middle"}}> {realname}</span>
         </label>
          }
            triggerType={["click", "hover"]}
          >
            <Menu>
              <Menu.Item>
                <a
                  style={{ color: "#0E87F7 !important" }}
                  className={styles.userProfileMenuItem}
                  onClick={handleLogout}
                >
                  退出登录
                </a>
              </Menu.Item>
            </Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
