/*
 * @Description: 搜索表单栏
 * @Author: Wenmin He
 * @Date: 2019-11-15 09:20:35
 * @LastEditors: Wenmin He
 * @LastEditTime: 2019-12-05 17:14:34
 */
import React, { useState, useEffect } from "react";
import _ from "lodash";
import FormData from "@/components/FormData";
import { request } from "@/utils/request";
import { getSourceType } from "../../service";

const Item = [
  {
    type: "Input",
    label: "数据源名称:",
    name: "name",
    hasClear:true,

  },
  {
    type: "Select",
    label: "数据源类型:",
    name: "type",
    options: [],
    hasClear:true,

  },

];

export default function SearchForm(props) {
  const [formItem, setformItem] = useState(Item);

  const getData = async () => {
    // 数据源类型
    const params = getSourceType();
    const res = await request(params);
    const sourceList = _.dropRight(_.drop(res.data, 1), 2);
    const arr = Item;
    arr[1].options = sourceList.map((item) => {
      return {
        value: Number(item.code),
        label: item.type,
      };
    });
    setformItem([...arr]);
  };
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <FormData
      dataSource={formItem}
      handleReset={props.handleReset}
      handleSubmit={props.handleSubmit}
    />
  );
}
