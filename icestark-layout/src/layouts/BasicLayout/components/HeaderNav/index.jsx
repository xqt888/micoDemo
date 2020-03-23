import React, { useState, useEffect }  from "react";
import { Nav } from "@alifd/next";
import { headerMenuConfig } from "@/config/menu";
import { AppLink } from "@ice/stark";

export default function HeaderNav(props) {
  const [selectedKeys, setSelectedKeys] = useState([]);
  useEffect(() => {
    setSelectedKeys([props.pathname])
    console.log(props.pathname,"appConfig")
  }, [props.pathname]);

  return (
    <>
      {headerMenuConfig && headerMenuConfig.length > 0 ? (
        <Nav direction="hoz" type="primary" selectedKeys={selectedKeys}>
          {headerMenuConfig.map((nav, idx) => {
            return (
              <Nav.Item key={nav.path} icon={nav.icon ? nav.icon : null}>
                <AppLink to={nav.path}>{nav.name}</AppLink>
                {/* <a {...linkProps}></a> */}
              </Nav.Item>
            );
          })}
        </Nav>
      ) : null}
    </>
  );
}
