import React from "react";
import {Dropdown, Menu } from "@alifd/next";
import { withRouter } from "react-router-dom";
import stores from "@/stores/index";
import { request } from "@/utils/request";
import { getCasOut } from "../../service";
import styles from "./index.module.scss";
import urlParse from "url-parse";
const urlQuery = urlParse(location.href, true).query || {};

function Header(props) {
  const userProfile = stores.useStore("userProfile");

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

  return (
      <div>
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
  );
}

export default withRouter(Header);
