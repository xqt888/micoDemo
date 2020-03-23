/*
 * @Description: 元模型管理树
 * @Author: Wenmin He
 * @Date: 2020-01-13 11:34:30
 * @LastEditors: Wenmin He
 * @LastEditTime : 2020-01-21 16:17:11
 */

import React, { useState, useRef, useLayoutEffect } from "react";
import {
  Tree,
  Icon,
  Menu,
  Dropdown,
  Search,
  Message,
  Loading,
  Dialog,
  Button,
  Form,
  Field,
  Input,
  Select,
  Step
} from '@alifd/next';
import { getSize, getOffset } from "@/utils/util";
import styles from "./index.module.scss";
import { Scrollbars } from "react-custom-scrollbars";
import { request } from '@/utils/request';
import { getTreeData, addPkg } from '../../service';
import FristForm from './FristForm';
import SecondForm from './SecondForm';

const TreeNode = Tree.Node;
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;

export default function (props) {
  const [scrollHeight, setScrollHeight] = useState(getSize().windowH);
  const [conHeight, setConHeight] = useState(getSize().windowH);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [matchedKeys, setMatchedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [treeData, setTreeData] = useState([]);
  const [treeLoading, setTreeLoading] = useState(false);
  const [menuList, setMenuList] = useState([]);
  const [packageVisible, setPackageVisible] = useState(false);
  const [submit1Loading, setSubmit1Loading] = useState(false);
  const [currentSelectData, setCurrentSelectData] = useState({});  // 当前选中的节点的数据
  const [currentType, setCurrentType] = useState(null); // 1：元模型包  2：元模型组   3：元模型
  const [metaModelVisible, setMetaModelVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [basicFormData, setBasicFormData] = useState({});
  const [attrFormData, setAttrFormData] = useState([]);
  const [modelType, setModelType] = useState([]);  // 元模型类型

  const steps = [
    ['Step 1', '基本信息'],
    ['Step 2', '属性信息']
  ].map((item, index) => <Step.Item aria-current={index === 1 ? 'step' : null} key={index} title={item[0]} content={item[1]}/>);

  let packageField = Field.useField();

  // 设置元模型树高度，超过高度显示滚动条
  const treeRef = useRef(null)
  const conRef = useRef(null)
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();  
  }, [treeRef.current, conRef.current])

  useLayoutEffect(() => {
    getTreeList();  // 获取树的数据
  }, []);

  // 获取树的数据
  const getTreeList = async () => {
    setTreeLoading(true);
    let params = getTreeData();
    let data = await request(params);
    setTreeLoading(false);
    if (data.code == 200) {
      const requestData = data.data;

      setTreeData(requestData);
      props.getSelectedNode(requestData[0]);  // 右侧详情默认显示技术元模型的信息
      allExpandedKeys(requestData);
    } else {
      Message.error(data.msg);
    }
  }

  const handleResize = () => {
    if (treeRef && treeRef.current) {
      let offsetTop = 0
      offsetTop = getOffset(treeRef.current).top
      setScrollHeight(getSize().windowH - offsetTop - 102)
    }
    if (conRef && conRef.current) {
      let offsetTop = 0
      offsetTop = getOffset(conRef.current).top
      setConHeight(getSize().windowH - offsetTop - 25)
    }
  }

  // 添加按钮弹出菜单
  const menuEle = (data) => {
    return (
      <Menu>
        {
          data.length > 0 ?
            data.map(item => (
              <Menu.Item onClick={() => { menuClickHandle(item) }} key={item.type}>{item.name}</Menu.Item>
            ))
            : ''
        }
      </Menu>
    )
  }

  // 设置需要展开的节点为所有
  const allExpandedKeys = (data) => {
    let expandedKeysInit = [];
    const loop = data => data.forEach(item => {
      expandedKeysInit.push(item.key);
      if (item.children && item.children.length) {
        loop(item.children);
      }
    });
    loop(data);
    setExpandedKeys(expandedKeysInit);
    setMatchedKeys([]);
  }

  // 下拉列表的点击事件
  const menuClickHandle = (data) => {
    if (data.type == 1 || data.type == 2) { // 如果点击新增元模型包/组
      setPackageVisible(true);
    } else { // 如果点击新增元模型
      setMetaModelVisible(true);
    }
    setCurrentSelectData(data.data);
    setCurrentType(data.type);
    
    if (data.data.type == "1") {  // 如果是业务元模型时
      setModelType(props.bizMetaModelType);
    } else if (data.data.type == "2") {  // 如果是技术元模型时
      setModelType(props.techMetaModelType);
    }
  }

  // 搜索事件
  const handleSearch = (value) => {
    value = value.trim();
    if (!value) {
      allExpandedKeys(treeData);
      return;
    }

    const currentMatchedKeys = [];
    const loop = data => data.forEach(item => {
      if (item.label.indexOf(value) > -1) {
        currentMatchedKeys.push(item.key);
      }
      if (item.children && item.children.length) {
        loop(item.children);
      }
    });
    loop(treeData);

    setExpandedKeys([...currentMatchedKeys]);
    setAutoExpandParent(true);
    setMatchedKeys(currentMatchedKeys);
  }

  // 按需筛选高亮节点
  const filterTreeNode = node => {
    return matchedKeys && matchedKeys.indexOf(node.props.eventKey) > -1;
  }

  // 展开或收起节点时
  const handleExpand = (keys) => {
    setExpandedKeys(keys);
    setAutoExpandParent(false);
  }

  // 节点的点击事件
  const nodeClickHandle = (data) => {
    props.getSelectedNode(data);
  }

  // 点击加号图标的回调
  const addClickHandle = (dataItem) => {
    let menuList = [];
    if (dataItem.code === "tech") {  // 如果是技术元模型根节点时
      menuList = [
        {
          name: "新建元模型包",
          type: "1", // 元模型包:1, 元模型组: 2, 元模型: 3
          data: dataItem
        },
        {
          name: "新建元模型组",
          type: "2",
          data: dataItem
        }
      ]
    } else if (dataItem.type == 2 && !dataItem.isGroup && !dataItem.isMetaModel) { // 如果是技术元模型的包
      menuList = [
        {
          name: "新建元模型组",
          type: "2",
          data: dataItem
        },
        {
          name: "新建元模型",
          type: "3",
          data: dataItem
        }
      ]
    } else if (dataItem.type == 2 && dataItem.isGroup) { // 如果是技术元模型的组
      menuList = [
        {
          name: "新建元模型",
          type: "3",
          data: dataItem
        }
      ]
    } else if (dataItem.code === "business") { // 如果是业务元模型根节点时
      menuList = [
        {
          name: "新建元模型包",
          type: "1",
          data: dataItem
        }
      ]
    } else if (dataItem.type == 1 && !dataItem.isGroup && !dataItem.isMetaModel) { // 如果是业务元模型的包时
      menuList = [
        {
          name: "新建元模型包",
          type: "1",
          data: dataItem
        },
        {
          name: "新建元模型",
          type: "3",
          data: dataItem
        }
      ]
    } else {
      menuList = [];
    }
    setMenuList(menuList);
  }

  // 树的渲染方法
  const renderTree = (data) => {
    return data.map(item => {
      if (!item.children) {
        return (
          <TreeNode label={renderLabel(item)} key={item.key}></TreeNode>
        )
      } else {
        return (
          <TreeNode label={renderLabel(item)} key={item.key}>
            {renderTree(item.children)}
          </TreeNode>
        )
      }
    })
  };


  // 节点的渲染方法
  const renderLabel = (data) => {
    return (
      <span className={styles.nodeItem}>
        <span onClick={() => { nodeClickHandle(data) }}>
          <Icon type={data.icon} className={styles.nodeIcon} />
          {data.label}
        </span>
        {
          data.isMetaModel ? '' :
            <Dropdown trigger={<Icon type="add" role="button" aria-label="icon add" className={styles.addIcon} onClick={() => { addClickHandle(data) }} />}
              triggerType="click"
            >
              {menuEle(menuList)}
            </Dropdown>
        }
      </span>
    )
  }

  // 关闭元模型包弹窗
  const packageHandleModal = () => {
    setPackageVisible(false);
  }

  // 获取元模型包/组的表单信息，并请求接口
  const savePackage = () => {
    packageField.validate(null, (errors, values) => {
      if (!errors) {
        setSubmit1Loading(true);
        sendPackageData(values);
      }
    });
  }

  // 保存元模型包信息
  const sendPackageData = async (values) => {
    let data = {
      pid: currentSelectData.id,
      type: currentSelectData.type,
      level: currentSelectData.level,
      isGroup: currentType == 1 ? false : true,
      icon: 'shujuku'  // 图标暂时写死
    }
    let params = addPkg({ ...values, ...data });
    let resData = await request(params);
    setSubmit1Loading(false);
    if (resData.code == 200) {
      Message.success(resData.msg);
      getTreeList();
      setPackageVisible(false);
    } else {
      Message.error(resData.msg);
    }
  }

  // 关闭新增元模型的弹窗
  const metaModelHandleModal = () => {
    setMetaModelVisible(false);
    setBasicFormData({});
    setAttrFormData([]);
  }

  // 下一步，并获取第一页提交的数据
  const toNextStep = (step, value) => {
    setStep(step);
    setBasicFormData(value);
  }

  // 上一步
  const setPrevStep = (step, value) => {
    setStep(step);
    setAttrFormData(value);
  }

  return (
    <div className={styles.searchContainer} ref={conRef} style={{ height: conHeight }}>
      <div ref={treeRef}>
        <Loading visible={treeLoading} shape="fusion-reactor" style={{ width: "100%" }}>
          <Search shape="simple" size="medium" onChange={handleSearch} />
          {
            treeData ?
              <Scrollbars style={{ height: scrollHeight }} autoHide>
                <Tree
                  autoExpandParent={autoExpandParent}
                  expandedKeys={expandedKeys}
                  filterTreeNode={filterTreeNode}
                  onExpand={handleExpand}
                  isNodeBlock
                >
                  {renderTree(treeData)}
                </Tree>
              </Scrollbars>
              :
              <div className={styles.emptyData}><span>暂无数据！</span></div>
          }
        </Loading>
      </div>

      {/* 新增元模型包/组弹窗 */}
      <Dialog
        visible={packageVisible}
        title={currentType == 1 ? '新增元模型包' : '新增元模型组'}
        onClose={packageHandleModal}
        className={styles.packageDialog}
        footer={
          <div>
            <Button type="normal" style={{ marginRight: '10px' }} onClick={packageHandleModal}>取消</Button>
            <Button type="primary" onClick={savePackage} loading={submit1Loading}>提交</Button>
          </div>
        }
      >
        <div style={{ width: "500px" }}>
          {
            currentType == 1 ?
              <Form field={packageField}>
                <FormItem label="包名称：">
                  <Input placeholder="请输入包名称" name="name" />
                </FormItem>
                <FormItem label="包代码：">
                  <Input placeholder="请输入包代码" name="code" />
                </FormItem>
                <FormItem label="描述信息：">
                  <TextArea placeholder="请输入描述信息" name="description" />
                </FormItem>
              </Form>
              :
              <Form field={packageField}>
                <FormItem label="组名称：">
                  <Input placeholder="请输入组名称" name="name" />
                </FormItem>
                <FormItem label="组类型：">
                  <Select placeholder="请选择组类型" name="groupType" style={{ width: "100%" }}>
                    {
                      props.groupTypeList.map((item) => (
                        <Option value={item.value} key={item.value}>{item.text}</Option>
                      ))
                    }
                  </Select>
                </FormItem>
                <FormItem label="描述信息：">
                  <TextArea placeholder="请输入描述信息" name="description" />
                </FormItem>
              </Form>
          }
        </div>
      </Dialog>


      {/* 新增元模型弹窗 */}
      <Dialog
        visible={metaModelVisible}
        title="新增元模型"
        onClose={metaModelHandleModal}
        className={styles.metaModelDialog}
        footer={false}
        // shouldUpdatePosition={true}
      >
        <div style={{ width: "500px" }}>
          <Step current={step} shape="circle">
            {steps}
          </Step>
          {
            step === 0 ? (
              <FristForm 
                systemList={props.systemList} 
                toNextStep={toNextStep}
                setDialogVisible={metaModelHandleModal}
                basicFormData={basicFormData}
                modelTypeList={modelType}
              />
            ) : 
            (
              <SecondForm 
                setDialogVisible={metaModelHandleModal}
                setPrevStep={setPrevStep}
                basicFormData={basicFormData}
                attrFormData={attrFormData}
                showTypeList={props.showTypeList}
                currentSelectData={currentSelectData}
                getTreeList={getTreeList}
                toBeForm={true}
              />
            )
          }

        </div>
      </Dialog>

    </div>
  )
}