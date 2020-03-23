import React from "react";
import FoundationSymbol from "@icedesign/foundation-symbol";
import { Dropdown, Menu } from "@alifd/next";
import { systemMenuConfig } from "@/config/menu";
import styles from "./index.module.scss";

// 不同系统
const menu = (
  <Menu>
    {systemMenuConfig.map((item, index) => {
      return (
        <Menu.Item
          key={index}
          onClick={() => {
            window.open(item.path);
          }}
        >
          <FoundationSymbol type={item.icon} className={styles.systemIcon} />
          {item.name}
        </Menu.Item>
      );
    })}
  </Menu>
);

export default function Logo() {
  return (
    <div className="logo">
      <Dropdown
        trigger={<FoundationSymbol type="menu" className={styles.system} />}
        triggerType={["click", "hover"]}
        afterOpen={() => console.log("after open")}
      >
        {menu}
      </Dropdown>
       <label className={styles.logo}>数据中台.数据资产</label>
    </div>
  );
}
