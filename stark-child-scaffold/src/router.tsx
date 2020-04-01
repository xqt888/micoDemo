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
