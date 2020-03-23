/*
 * @Description: 元模型管理右侧详情
 * @Author: Wenmin He
 * @Date: 2020-01-15 18:07:03
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-02-28 16:41:50
 */

import React from "react";
import styles from "./index.module.scss";
import { getMetaModel, editMetaModel, deleteMetaModel } from "../../service";
import { request } from '@/utils/request';
import SecondForm from "../OriginalTree/SecondForm";

import {
  Table,
  Tab,
  Form,
  Input,
  Select,
  Field,
  Icon,
  Button,
  Message,
  Dialog
} from '@alifd/next';

const Column = Table.Column;
const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;

interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}

export default class OriginalDetail extends React.Component<States, Props> {
  field = new Field(this);

  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      title: "",
      showPkgDetail: true,
      iconList: [
        {
          value: "biaoge",
          label: "biaoge"
        },
        {
          value: "shitumoshi",
          label: "shitumoshi"
        },
        {
          value: "zuzhijigou",
          label: "zuzhijigou"
        },
        {
          value: "ziduanguanli",
          label: "ziduanguanli"
        }
      ],
      modelTypeList: [],
      canBeEdit: false,
      dataList: [],
      secondFormRef: {},
      currentMetaModelId: null
    }
  }

  componentWillReceiveProps(newProps) {
    this.dealData(newProps.selectedNode);

    this.setState({
      modelTypeList: this.props.techMetaModelType
    })
    this.cancelHandle();
  }

  dealData = async (data) => {
    const { type, isGroup, name, id } = data;
    this.setState({
      title: name,
      currentMetaModelId: id
    });

    if (type == "1" || type == "2") {
      this.setState({
        title: name,
        showPkgDetail: true
      });
      if (isGroup) { // 组
        const tableData = [
          {
            title: "组名称",
            detail: data.name
          },
          {
            title: "组类型",
            detail: data.groupType
          },
          {
            title: "描述信息",
            detail: data.description
          }
        ];
        this.setState({
          tableData: tableData
        });
      } else { // 包
        const tableData = [
          {
            title: "包名称",
            detail: data.name
          },
          {
            title: "包代码",
            detail: data.code
          },
          {
            title: "描述信息",
            detail: data.description
          }
        ];
        this.setState({
          tableData: tableData
        });
      }
    } else {
      if (data.id) {
        const id = data.id;
        const params = getMetaModel(id);
        const res = await request(params);
        this.field.setValues({
          id: id,
          name: name,
          code: res.data.code,
          belongSystem: res.data.belongSystem,
          type: res.data.type,
          icon: res.data.icon,
          description: res.data.description,
          metaModelPkgId: res.data.metaModelPkgId
        })
        this.setState({
          title: name,
          showPkgDetail: false,
          dataList: res.data.props
        });

      }
    }
  }

  // 点击编辑切换成可编辑状态
  editHandle = () => {
    this.setState({
      canBeEdit: true
    })
  }

  // 点击取消，取消可编辑状态
  cancelHandle = () => {
    this.setState({
      canBeEdit: false
    })
  }

  // 点击保存
  saveHandle = () => {
    this.setState({
      canBeEdit: false
    })
    // 获取基本信息的数据
    this.field.validate(null, (errors, values) => {
      const basicForm = values;
      const secondFormRef = this.state.secondFormRef;
      let ajaxData = {};
      
      if (secondFormRef.state) {
        const tableFormRef = secondFormRef.state.tableFormRef;
        const attrForm = tableFormRef.state.dataList;
        ajaxData = {...basicForm, ...{ props: attrForm }};
      } else {
        ajaxData = {...basicForm, ...{ props: this.state.dataList }};
      }
      this.saveMetaModel(ajaxData);
    });
  }

  // 点击删除
  deleMetaModel = () => {
    // Dialog.confirm({
    //   title: "删除",
    //   content: "是否确定删除？",
    //   messageProps: {
    //     type: "warning"
    //   },
    //   onOk: async () => {
    //     let params = deleteMetaModel(this.state.currentMetaModelId);
    //     let data = await request(params);
    //     if (data) {
    //       Message.success(data.msg);
    //       const secondFormRef = this.state.secondFormRef;
    //       console.log(secondFormRef)
    //       secondFormRef.props.getTreeList();
    //     }
    //   },
    //   onCancel: () => {}
    // });
    Message.success("成功");
    console.log(this.props);
    // this.props.oriTreeListFn();
  }

  saveMetaModel = async (data) => {
    const params = editMetaModel(data);
    const response = await request(params);
    if (response.code == 200) {
      Message.success(response.msg);
    } else {
      Message.error(response.msg);
    }
  }

  getSecondFormRef = (ref) => {
    this.setState({
      secondFormRef: ref
    })
  }

  render() {
    const { tableData, title, showPkgDetail, iconList, modelTypeList, canBeEdit, dataList } = this.state;
    const { systemList } = this.props;

    return (
      <div>
        {
          showPkgDetail ?
            <div>
              <p className={styles.title}>
                {title}
              </p>
              <div className={styles.tableContent}>
                <Table dataSource={tableData}>
                  <Column title="名称" dataIndex="title" />
                  <Column title="详细" dataIndex="detail" />
                </Table>
              </div>
            </div>
            :
            title ?
              <div>
                <p className={styles.title}>
                  {title}
                  <span className={styles.btnCont}>
                    {
                      canBeEdit ?
                        <div style={{ display: "inline-block" }}>
                          <Button text className={styles.saveBtn} onClick={this.saveHandle}><Icon type="picture" />保存</Button>
                          <Button text className={styles.cancleBtn} onClick={this.cancelHandle}><Icon type="exit" />取消</Button>
                        </div>
                        :
                        <Button text className={styles.editBtn} onClick={this.editHandle}><Icon type="edit" />编辑</Button>
                    }
                    <Button text className={styles.deleBtn} onClick={this.deleMetaModel}><Icon type="ashbin" />删除</Button>
                    <Button text className={styles.sendBtn}><Icon type="upload" />送审</Button>
                  </span>
                </p>
                <div className={styles.tabContent}>
                  <Tab>
                    <Tab.Item title="基本信息" key="1">
                      <div className={styles.tabItemCont}>
                        <Form inline field={this.field}>
                          <FormItem label="元模型名称：" labelAlign="left">
                            <Input placeholder="请输入元模型名称" name="name" disabled={!canBeEdit} />
                          </FormItem>
                          <FormItem label="元模型代码：" labelAlign="left">
                            <Input placeholder="请输入元模型代码" name="code" disabled={!canBeEdit} />
                          </FormItem>
                          <FormItem label="所属系统：" labelAlign="left">
                            <Select placeholder="请选择所属系统" name="belongSystem" disabled={!canBeEdit} >
                              {
                                systemList.map((item) => (
                                  <Option value={item.value} key={item.value}>{item.text}</Option>
                                ))
                              }
                            </Select>
                          </FormItem>
                          <FormItem label="元模型类型：" labelAlign="left">
                            <Select placeholder="请选择元模型类型" name="type" disabled={!canBeEdit} >
                              {
                                modelTypeList.map((item) => (
                                  <Option value={item.value} key={item.value}>{item.text}</Option>
                                ))
                              }
                            </Select>
                          </FormItem>
                          <FormItem label="显示图标：" labelAlign="left">
                            <Select placeholder="请选择显示图标" name="icon" disabled={!canBeEdit} >
                              {
                                iconList.map((item) => (
                                  <Option value={item.value} key={item.value}>
                                    <Icon type={item.label} />
                                  </Option>
                                ))
                              }
                            </Select>
                          </FormItem>
                          <FormItem label="描述信息：" labelAlign="left">
                            <TextArea placeholder="请输入描述信息" name="description" disabled={!canBeEdit} />
                          </FormItem>
                        </Form>
                      </div>
                    </Tab.Item>
                    <Tab.Item title="属性信息" key="2">
                      <div>
                        <SecondForm
                          attrFormData={dataList}
                          toBeForm={false}
                          canBeEdit={canBeEdit}
                          showTypeList={this.props.showTypeList}
                          getSecondFormRef={this.getSecondFormRef}
                        />
                      </div>
                    </Tab.Item>
                  </Tab>
                </div>

              </div>
              : ""
        }
      </div>
    )
  }
}
