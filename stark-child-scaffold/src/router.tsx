import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React from "react";
import path from "path";
import routes from "@/config/routes";
import { getHashParam } from "@/utils/util";
import { getCasParams } from "./service";
import { request } from "@/utils/request";
import stores from "@/stores/index";

const RouteItem = props => {
  const { redirect, path: routePath, component, key, exact } = props;
  if (redirect) {
    return <Redirect exact key={key} from={routePath} to={redirect} />;
  }
  return (
    <Route exact={exact} key={key} component={component} path={routePath} />
  );
};

const getCas = async () => {
  // 用户信息状态管理
  const userProfile = stores.useStore("userProfile");
  const { fetchData } = userProfile;
  // 网关验证接口需要获取重定向地址和ticket
  let href = window.location.protocol + "//" + window.location.host;
  let ticket = getHashParam(window.location.href, "ticket");
  let params = getCasParams({
    ticket: ticket,
    service: href
  });
  let data = await request(params);
  if (data && data.code == 200) {
    const { result } = data;
    sessionStorage.setItem("token", result.token);
    if (result && result.userInfo) {
      sessionStorage.setItem("userinfo", JSON.stringify(result.userInfo));
      if (result.departs) {
        sessionStorage.setItem("departs", JSON.stringify(result.departs));
      }
      fetchData(result.userInfo || {}, result.departs || []);
    }
    window.location.href = href;
  } else {
    // window.location.href = `http://10.194.186.226:8081/cas/login?service=${href}`;
    // window.location.href="http://10.194.186.226:8081/cas/logout"
  }
};

// 跳转单点
const handleLink = async () => {
  let response = await request({
    url: `/configjson`
  });
  console.log(response,"response")
  if (response && response.code == 200) {
    sessionStorage.setItem("response",JSON.stringify(response));
    const { data } = response;
    let casHref = data.casHref;
    // 设置单点地址
    sessionStorage.setItem("casHref",casHref);
    sessionStorage.setItem("configJson",JSON.stringify(data))
    let href =window.location.protocol + "//" + window.location.host;
    window.location.href = `${casHref}/cas/login?service=${href}`;
  }
};

const router = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, id) => {
          const {
            component: RouteComponent,
            children,
            detailRoute,
            ...others
          } = route;
          return (
            <Route
              key={id}
              {...others}
              component={props => {
                // let token = sessionStorage.getItem("token");
                // let params = getHashParam(window.location.href, "ticket");
                // if (!token && !params) {
                //   handleLink();
                //   return <div></div>;
                // } else if (params) {
                //   getCas();
                //   return <div></div>;
                // }
                return children ? (
                  <RouteComponent key={id} {...props}>
                    <Switch>
                      {children.map((routeChild, idx) => {
                        const {
                          redirect,
                          path: childPath,
                          component,
                          exact
                        } = routeChild;
                        return RouteItem({
                          key: `${id}-${idx}`,
                          redirect,
                          path: childPath && path.join(route.path, childPath),
                          component,
                          exact: exact
                        });
                      })}
                    </Switch>
                  </RouteComponent>
                ) : (
                  <>
                    {RouteItem({
                      key: id,
                      ...route
                    })}
                  </>
                );
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default router;
