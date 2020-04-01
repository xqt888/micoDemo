/*
 * @Description: 数据源管理入口
 * @Author: Wenmin He
 * @Date: 2019-11-15 09:21:24
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-10 17:20:30
 */

import React, {useState, useEffect} from "react";
import { request } from "@/utils/request";
import { connectTestAsSave, saveSourceList, getSourceInfo, updateSource, getQuerySystem } from "./service";
import { Button, Icon, Dialog, Form, Field, Message, Loading } from "@alifd/next";
import Table from './components/Table';
import SearchForm from './components/SearchForm';
import FirstDialogContent from './components/FirstDialogContent';
import LoadingPage from '@/components/LoadingPage'
import DialogForm from './components/DialogForm';
import {guid}from '@/utils/util'

import styles from "./index.module.scss";

export default function() {
  const [searchData, setSearchData] = useState({});
  const [firstVisible, setFirstVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const [title, setTitle] = useState();
  const [typeValue, setTypeValue] = useState();
  const [tableCont, setTableCont] = useState({});
  const [sourceId, setSourceId] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [sysCodeList, setSysCodeList] = useState([]);

  let myfield = Field.useField();

  // 查询
  const handleSubmit = values => {
    setSearchData({
      unique:guid(),
      ...values
    })
  };
  
  // 重置
  const handleReset = () => {
    setSearchData({unique:guid()})
  };

  // 设置1弹窗显示/隐藏
  const firstHandleModal = () => {
    setFirstVisible(!firstVisible);
  }

  // 获取选择的数据源类型，并关闭1弹窗
  const firstCloseHandle = (data) => {
    // 暂时屏蔽除了hive和数据库外的对话框
    if (data.value == "8" || data.value == "10") {
      Message.error("该功能暂未开放！");
      return;
    }
    firstHandleModal();
    secondHandleModal(data);
  }

  // 获取单条数据信息
  const getDataInfo = async (id) => {
    setLoadingVisible(true);
    let params = getSourceInfo(id);
    let data = await request(params);
    setLoadingVisible(false);
    if (data.code == 200) {
      let formData = data.data;
      let type = formData.type;
      if (type == 1 || type == 2 || type == 3 || type == 4) {
        formData.dbType = type;
      }
      myfield.setValues(formData);
    } else {
      Message.error(data.msg);
    }
  }

  // 设置2弹窗显示/隐藏
  const secondHandleModal = (data) => {
    setTitle((data.id ? '编辑' : '新建') + data.text + '数据源');
    setTypeValue(data.value);
    setSecondVisible(!secondVisible);
    setBtnLoading(false);
    setSubmitLoading(false);
    if (data.id) {
      setSourceId(data.id);
      getDataInfo(data.id);
    }
    getSysCodeList();
  }

  // 弹窗2关闭时的回调
  const secondHandleClose = () => {
    setSecondVisible(!secondVisible);
    if (sourceId) {
      setSourceId('');
      return;
    }
    firstHandleModal();
  }

  // 获取连接测试数据
  const getLinkData = () => {
    myfield.validate(null, (errors, values) => {
      if (!errors) {
        setBtnLoading(true);
        linkTestHandle(values);
      }
    });
  }

  // 连接测试
  const linkTestHandle = async (data) => {
    const formDataList = data;
    // 数据处理
    formDataList.port = Number(formDataList.port);
    let typeObj = {};
    if (typeValue == "db") {
      typeObj = {
        type: formDataList.dbType
      }
    } else {
      typeObj = {
        type: typeValue
      }
    }
    let params = connectTestAsSave({...formDataList, ...typeObj});
    let resData = await request(params);
    setBtnLoading(false);
    if (resData.code == 200) {
      Message.success(resData.msg);
    } else {
      Message.error(resData.msg);
    }
  }

  // 获取表单数据
  const getFormData = async () => {
    myfield.validate(null, (errors, values) => {
      if (!errors) {
        if (sourceId) {
          updateForm(values);
        } else {
          submitForm(values);
        }
      }
    });
  }

  // 新建保存
  const submitForm = async (data) => {
    setSubmitLoading(true);
    const formDataList = data;
    // 数据处理
    formDataList.port = Number(formDataList.port);
    let typeObj = {};
    if (typeValue == "db") {
      typeObj = {
        type: formDataList.dbType
      }
    } else {
      typeObj = {
        type: typeValue
      }
    }
    let params = saveSourceList({...formDataList, ...typeObj});
    let resData = await request(params);
    setSubmitLoading(false);
    if (resData.code == 200) {
      Message.success(resData.msg);
      setSecondVisible(!secondVisible);
      tableCont.getTableData(); // 使用table组件的方法，重新获取表格数据
    } else {
      Message.error(resData.msg);
    }
  }

  // 编辑保存
  const updateForm = async (data) => {
    const formDataList = data;
    // 数据处理
    formDataList.port = Number(formDataList.port);
    let typeObj = {};
    if (typeValue == "db") {
      typeObj = {
        type: formDataList.dbType
      }
    } else {
      typeObj = {
        type: typeValue
      }
    }
    let params = updateSource({...formDataList, ...typeObj});
    let resData = await request(params);
    if (resData.code == 200) {
      Message.success(resData.msg);
      setSecondVisible(!secondVisible);
      tableCont.getTableData(); // 使用table组件的方法，重新获取表格数据
    } else {
      Message.error(resData.msg);
    }
  }

  // 获取table对象
  const getRef = (ref) => {
    setTableCont(ref);
  }

  const getSysCodeList = async () => {
    const params = getQuerySystem({});
    const resData = await request(params);
    let sysCodeList = [];
    if (!resData || !resData.data) {
      return;
    }
    resData.data.map((item) => {
      let sysCodeItem = {
        label: '',
        value: ''
      };
      sysCodeItem.label = item.text;
      sysCodeItem.value = Number(item.value);
      sysCodeList.push(sysCodeItem);
    })
    setSysCodeList(sysCodeList);
  }

  return (
    <LoadingPage>
    <div className="contentWrap">
      {/* <div className="headerTitle">
        数据源管理
      </div> */}
      <div className="wraper">
        <div className="searchWrap">
          <SearchForm
            handleReset={handleReset}
            handleSubmit={handleSubmit}
          />
          <div className="operation">
            <Button type="primary" onClick={firstHandleModal}>
              <Icon type="add" size="small" />
              新建
            </Button>
          </div>
        </div>
        <Table searchData={searchData} openDialog={secondHandleModal} onRef={getRef} />
        <Dialog
          visible={firstVisible}
          title="选择数据源类型"
          onClose={firstHandleModal}
          className={styles.chooseSouceTypeDia}
        >
          <FirstDialogContent sendResult={firstCloseHandle} />
        </Dialog>
        <Dialog
          visible={secondVisible}
          title={title}
          shouldUpdatePosition={true}
          footer={
            <div>
              <Button type="secondary" style={{ float: 'left' }} onClick={getLinkData} loading={btnLoading}>连接测试</Button>
              <Button type="normal" style={{ marginRight: '10px' }} onClick={secondHandleClose}>取消</Button>
              <Button type="primary" onClick={getFormData} loading={submitLoading}>提交</Button>
            </div>
          }
          onClose={secondHandleClose}
        >
          <Loading visible={loadingVisible} shape="fusion-reactor">
            <Form inline field={myfield}>
              <DialogForm typeValue={typeValue} sysCodeList={sysCodeList} />
            </Form>
          </Loading>
        </Dialog>
    
      </div>
    </div>
    </LoadingPage>
  );
}
