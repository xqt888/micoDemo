/*
 * @Description: file content
 * @Author: xuqiuting
 * @Date: 2020-01-10 17:08:01
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-11 23:58:22
 */
import React from "react";
import { request } from "@/utils/request";

export const apps = [
  {
    path: ["/", "/converge"],
    title: "数据汇聚",
    entry: 'http://10.194.186.247:85/index.html'
    // entry:"/converge",
    // entryContent:
  },
  {
    path: "/dataGovernance",
    title: "数据资产",
    // entry: "/dataGovernance",
    entry: 'http://10.194.186.247:86/index.html'
    // basename:"/dataGovernance",
    // entry: 'http://10.194.186.245:31800/index.html'
    // entryContent:"/dataGovernance",
    // entryContent:
    //   "<!DOCTYPE html>" +
    //   " <html>" +
    //   " <head>" +
    //   '      <meta charset="utf-8" />' +
    //   '       <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">' +
    //   '  <meta name="viewport" content="width=device-width">' +
    //   " <title>数据资产</title>" +
    //   ' <link rel="shortcut icon" href="http://10.194.186.245:31800/favicon.png"><link href="http://10.194.186.245:31800/css/index.23f6e7.css" rel="stylesheet"></head>' +
    //   "<body>" +
    //   '<div id="ice-container"></div>' +
    //   ' <script type="text/javascript" src="http://10.194.186.245:31800/js/index.23f6e7.js"></script></body>' +
    //   "</html>"
    // url:"http://10.194.186.245:31800",
    // entryContent:()=>{
    //   let response = request({
    //     url: `http://10.194.186.245:31800/index.html`,
    //     method: "GET",
    //   })
    //   return response
    // },
    // url:"http://10.194.186.245:31800",
  },
  {
    path: "/dataService",
    title: "数据服务",
    exact: true,
    // entry: "/dataService"
    entry: 'http://10.194.186.245:31499/index.html'
    // entryContent: "<html></html>"
  }
];
