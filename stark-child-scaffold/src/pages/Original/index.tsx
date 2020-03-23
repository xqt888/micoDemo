/*
 * @Description: 元模型管理入口页
 * @Author: Wenmin He
 * @Date: 2020-01-13 10:28:56
 * @LastEditors  : Wenmin He
 * @LastEditTime : 2020-01-21 17:25:51
 */

import React, { useState, useLayoutEffect } from "react";
import styles from "./index.module.scss";
import LoadingPage from "@/components/LoadingPage";
import OriginalTree from './components/OriginalTree';
import OriginalDetail from './components/OriginalDetail';
import { request } from '@/utils/request';
import { getGroupType } from './service';

export default function () {
  const [selectedNode, setSelectedNode] = useState({});
  const [groupTypeList, setGroupTypeList] = useState([]);
  const [systemList, setSystemList] = useState([]);
  const [showTypeList, setShowTypeList] = useState([]);
  const [techMetaModelType, setTechMetaModelType] = useState([]);  // 技术元模型类型
  const [bizMetaModelType, setBizMetaModelType] = useState([]);  // 业务元模型类型

  useLayoutEffect(() => {
    getDistData();   // 获取字典数据（组类型、所属系统、展现方式、技术元模型类型、业务元模型类型）
  }, [])

  // 请求字典数据
  const getDistData = async () => {
    // 获取组类型
    const params1 = getGroupType('groupType');
    const res1 = await request(params1);
    if (res1.code == 200) {
      setGroupTypeList(res1.data);
    }

    // 获取所属系统
    const params2 = getGroupType('dcSystem');
    const res2 = await request(params2);
    if (res2.code == 200) {
      setSystemList(res2.data);
    }

    // 获取展现方式
    const params3 = getGroupType('showType');
    const res3 = await request(params3);
    if (res3.code == 200) {
      let showTypeList = [];
      res3.data.map((item) => {
        let obj = {
          label: item.text,
          value: item.value
        }
        showTypeList.push(obj);
      })
      setShowTypeList(showTypeList);
    }

    // 获取技术元模型类型
    const params4 = getGroupType('techMetaModelType');
    const res4 = await request(params4);
    if (res4.code == 200) {
      setTechMetaModelType(res4.data);
    }

    // 获取业务元模型类型
    const params5 = getGroupType('bizMetaModelType');
    const res5 = await request(params5);
    if (res4.code == 200) {
      setBizMetaModelType(res5.data);
    }
  }

  const getSelectedNode = (data) => {
    setSelectedNode(data);
  }

  return (
    <LoadingPage>
      <div className="contentWrap">
        <div className={styles.container}>
          <div className={styles.left}>
            <OriginalTree
              getSelectedNode={getSelectedNode}
              groupTypeList={groupTypeList}
              systemList={systemList}
              showTypeList={showTypeList}
              techMetaModelType={techMetaModelType}
              bizMetaModelType={bizMetaModelType}
            />
          </div>
          <div className={styles.right}>
            <OriginalDetail 
              selectedNode={selectedNode} 
              systemList={systemList}
              techMetaModelType={techMetaModelType}
              bizMetaModelType={bizMetaModelType}
              showTypeList={showTypeList}
            />
          </div>
        </div>
      </div>
    </LoadingPage>
  );
}
