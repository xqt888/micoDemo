/*
 * @Description: 表格型表单生成器
 * @Author: Wenmin He
 * @Date: 2020-01-06 14:54:39
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-02-27 17:51:26
 */

import React, { Fragment } from "react";
import Table from "@/components/TableBox";
import { Button, Icon } from '@alifd/next';
import _ from "lodash";
import EditablePane from './EditablePane';

import styles from "./index.module.scss";

interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}

export default class TableForm extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      dataList: this.props.dataList, // 表格的数据
      headerColumn: [], // 表格表头数据和单元格配置
      dataItem: this.props.dataItem, // 新增行的初始数据
      canBeEdit: this.props.canBeEdit  // 是否可以修改
    }
  }

  componentDidMount() {
    this.props.onRef(this);

    this.dealData(this.props.headerColumn);
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      canBeEdit: newProps.canBeEdit
    })
    // this.dealData(newProps.headerColumn, this.state.canBeEdit);
  }

  dealData = (data) => {
    const headCol = data;
    let headerColumn = [];
    headCol.map((item, index) => {
      let colItem = {
        title: item.title,
        dataIndex: item.dataIndex,
        width: item.width || 80,
        cell: (value, index, record) => {
          if (item.type === "INPUT" || item.type === "NUMPICKER") {
            let isNew = record.isNew || false;
            return (
              <EditablePane
                defaultTitle={value}
                type={item.type}
                isNew={isNew}
                fieldName={item.dataIndex}
                index={index}
                changeData={this.changeData}
                isRequired={item.isRequired}
                canBeEdit={this.state.canBeEdit}
                isDisabled={item.isDisabled}
              />
            );
          } else if (item.type === "SELECT") {
            let isNew = record.isNew || false;
            let optionsList = item.options || [];
            let defalutText = "";
            optionsList.map(item => {
              if (item.value == value) {
                defalutText = item.label;
              }
            })
            return (
              <EditablePane
                defaultTitle={value}
                defalutValue={defalutText}
                isNew={isNew}
                type={item.type}
                options={optionsList}
                fieldName={item.dataIndex}
                index={index}
                changeData={this.changeData}
                isRequired={item.isRequired}
                canBeEdit={this.state.canBeEdit}
                isDisabled={item.isDisabled}
              />
            );
          } else if (item.type === "CHECKBOX") {
            let isNew = record.isNew || false;
            return (
              <EditablePane
                defaultTitle={value}
                type={item.type}
                isNew={isNew}
                fieldName={item.dataIndex}
                index={index}
                changeData={this.changeData}
                isRequired={item.isRequired}
                canBeEdit={this.state.canBeEdit}
                isDisabled={item.isDisabled}
              />
            );
          } else {
            return;
          }

        }
      }
      headerColumn.push(colItem);
    })
    let operation = {
      title: "操作",
      dataIndex: "operation",
      width: 60,
      lock: "right",
      cell: (value, index, record) => {
        return (
          <Fragment>
            {
              this.state.canBeEdit ? 
              <Icon type="ashbin" onClick={() => { this.handleDelete(record) }} className={styles.deleteBtn} />
              :
              <Icon type="ashbin" className={styles.deleteBtnDisabled} />
            }
          </Fragment>
        )
      }
    };
    headerColumn.push(operation);
    this.setState({
      headerColumn: headerColumn
    })
  }
  // 改变表格的数据
  changeData = (fieldName, index, data) => {
    const arr = _.cloneDeep(this.state.dataList);
    arr[index][fieldName] = data;
    this.setState({
      dataList: arr
    });
  }

  // 新增行
  addNewParam = () => {
    const dataSourceList = _.cloneDeep(this.state.dataList);
    const newDataSourceItem = _.cloneDeep(this.state.dataItem);
    dataSourceList.push(newDataSourceItem);
    this.setState({
      dataList: dataSourceList
    });
  }

  // 删除
  handleDelete = (record) => {
    const dataSource = _.cloneDeep(this.state.dataList);
    const id = record.id;
    let index = -1;
    dataSource.map((item, i) => {
      if (item.id === id) {
        index = i;
      }
    });
    if (index !== -1) {
      dataSource.splice(index, 1);
      this.setState({
        dataList: dataSource
      });
    }

    const delParamList = _.cloneDeep(this.state.delParamList);
    if (!record.isNew) {
      const id = record.id;
      delParamList.push(id);
      this.setState({
        delParamList: delParamList
      })
    }
  }


  render() {
    const { dataList, headerColumn, canBeEdit } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <Table
            fixedHeader
            dataSource={dataList}
            propsOffsetHeight={130}
            propsWidth={"100%"}
            columns={headerColumn}
            pagination={false}
          >
          </Table>
          {
            canBeEdit ?
              <Button text type="primary" className={styles.addParamBtn} onClick={this.addNewParam}>
                <Icon type="add" />
                新增参数
              </Button>
              :
              <Button text type="primary" className={styles.addParamBtn} disabled>
                <Icon type="add" />
                新增参数
              </Button>
          }
        </div>
      </div>
    )

  }
}

TableForm.defaultProps = {
  canBeEdit: true
}