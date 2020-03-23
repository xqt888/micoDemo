import React, { useState, useEffect } from "react";
import { AppRouter, AppRoute } from "@ice/stark";
import NotFound from "@/components/NotFound";
import PageLoading from "@/components/PageLoading";
import { request } from "@/utils/request";
import { getHashParam } from "@/utils/util";
import { getCasParams } from "./service";
import urlParse from "url-parse";
import { apps } from "public/data";
import BasicLayout from '@/layouts/BasicLayout';
const urlQuery = urlParse(location.href, true).query || {};
import axios from "axios";

const getBundleUrl =(url,entry)  => {
  let jsUrl = `${url}/js/index.js`;
  let cssUrl = `${url}/css/index.css`;
  if (urlQuery.env === "local") {
    jsUrl = `//127.0.0.1:${urlQuery.port}/js/index.js`;
    cssUrl = `//127.0.0.1:${urlQuery.port}/css/index.css`;
  }

  return [cssUrl, jsUrl];
};

export default function App() {
  const [pathname, setPathname] = useState();
  const [appConfig,setAppConfig] = useState({});

  function handleRouteChange(newPathname) {
    console.log(
      "route change oldPathname",
      pathname,
      "newPathname",
      newPathname
    );
    setPathname(newPathname);
  }

  function handleAppLeave(appConfig) {

    console.log("handleAppLeavel", appConfig);
  }

  function handleAppEnter(appConfig) {
    setAppConfig(appConfig)
    console.log("handleAppEnter", appConfig);
  }

  return (
    <BasicLayout pathname={pathname}>
    <AppRouter
      NotFoundComponent={NotFound}
      LoadingComponent={PageLoading}
      onRouteChange={handleRouteChange}
      onAppLeave={handleAppLeave}
      onAppEnter={handleAppEnter}
    >
      {(apps || []).map((item, idx) => {
        return <AppRoute key={idx} {...item} url={getBundleUrl(item.url,item.entry)} />;
      })}
    </AppRouter>
    </BasicLayout>
  );
}
