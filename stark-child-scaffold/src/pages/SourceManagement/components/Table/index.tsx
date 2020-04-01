import React, { Fragment } from "react";
import _ from "lodash";
import Table from "@/components/TableBox";
import { request } from "@/utils/request";
import { Dialog, Message } from "@alifd/next";
import {
  getTableDataParams,
  deleteTableById,
  tableLinkTest
} from "../../service";
import styles from "./index.module.scss";

interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}
export default class SourceTable extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pages: 0,
      dataSource: [],
      columns: [],
      loading: false,
      pageNum: 1,
      pageSize: 10,
      searchData: {},
      sort:{}
    };
  }

  componentDidMount() {
    this.setState(
      {
        searchData: {
          pageNum:1,
          type: 0,
          name: null
        }
      },
      () => {
        this.getTableData();
      }
    );
    
    this.props.onRef(this); // 将子组件的this指向传入父组件
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.searchData, this.props.searchData)) {
      const type = this.props.searchData.type ? this.props.searchData.type : 0;
      const name = this.props.searchData.name ? this.props.searchData.name : null;
      this.setState(
        {
          pageNum:1,
          searchData: {
            type: type,
            name: name
          }
        },
        () => {
          this.getTableData();
        }
      );
    }
  }

  // 获取头部
  getTableHeader = columns => {
    let columnsNew = columns || [];
    // 遍历加上特殊操作
    columnsNew = columnsNew.map(item => {
      item.dataIndex = item.name;
      item.width = 120;
      // 如果是数据源类型
      if(item.dataIndex == "name"){
        item.width = 160;
      }else if (item.dataIndex == "type") {
        item.cell = (value) => {
          let text = "";
          switch (value) {
            case 1:
              text = "mysql";
              break;
            case 2:
              text = "oracle";
              break;
            case 3:
              text = "sqlservice";
              break;
            case 4:
              text = "postgresql";
              break;
            case 5:
              text = "hive";
              break;
            case 6:
              text = "kafka";
              break;
            case 7:
              text = "ftp";
              break;
            case 8:
              text = "http";
              break;
            case 9:
              text = "ES";
              break;
            case 10:
              text = "mongoDB";
              break;
            case 11:
              text = "hdfs";
              break;
            case 12:
              text = "hbase";
              break;
            case 13:
              text = "greenplum";
              break;
            default:
              text = "/";
          }
          return <span>{text}</span>
        }
      } else if (item.dataIndex == "status") {
        // 如果是数据源状态
        item.cell = (value) => {
          let classType = "";
          let text = "";
          switch (value) {
            case 1:
              text = "正常";
              classType = styles.success;
              break;
            case 0:
              text = "异常";
              classType = styles.error;
              break;
            default:
              text = "/";
          }
          return <span className={classType}>{text}</span>;
        }
      } else if (item.dataIndex == "createTime") {
        // 如果是创建时间
        let text = "";
        item.cell = (value) => {
          text = value ? value.replace("T", " ") : "/";
          return <span>{text}</span>;
        }
      } else {
        // 如果是其他
        let text = "";
        item.cell = (value) => {
          text = value ? value : "/";
          return <span>{text}</span>;
        }
      }

      // 改变宽度
      if (item.dataIndex == "createTime") {
        item.width = 180;
      }
      if (item.dataIndex == "connectInfo") {
        item.width = 200;
      }
      return item;
    });
    // 添加操作项
    let obj = {
      title: "操作",
      dataIndex: "operation",
      width: 180,
      lock: "right",
      cell: this.operationCell
    };
    columnsNew.push(obj);
    return columnsNew;
  };

  // 获取table数据
  getTableData = () => {
    this.setState(
      {
        loading: true
      },
      async () => {
        let values = {
          pageNum: this.state.pageNum,
          pageSize: this.state.pageSize
        };
        let dataValue = { ...this.state.searchData };
        let params = getTableDataParams(values, dataValue);
        let response = await request(params);
        if (response.data) {
          const { total, table, pages } = response.data;
          this.setState({
            total: total,
            pages: pages,
            dataSource: (table && table.bodies) || [],
            columns: table && this.getTableHeader(table.headers) || [],
            loading: false
          });
        }
      }
    );
  };


  // 页数改变
  onPageChange = async (current, obj) => {
    this.setState(
      {
        pageNum: current
      },
      () => {
        this.getTableData();
      }
    );
  };

  // 排序
  onSort = async (dataIndex, order) => {
    this.setState(
      {
        pageNum: 1,
        sort: { title: dataIndex, order }
      },
      () => {
        this.getTableData();
      }
    );
  };

  // 连接测试
  handleTest = async (record) => {
    this.setState({
      loading: true
    })
    // 测试可将record.id替换成33
    let params = tableLinkTest(record.id);
    let data = await request(params);
    if (data.code == 200) {
      Message.success(data.msg);
    }  else {
      Message.error(data.msg);
    }
    this.setState({
      loading: false
    })
    this.getTableData();
  }

  // 编辑
  handleEdit = record => {
    const { openDialog } = this.props;
    let text = "";
    let type = "";
    switch (record.type) {
      case 1:
      case 2:
      case 3:
      case 4:
        text = "数据库";
        type = "db";
        break;
      case 5:
        text = "hive";
        break;
      case 6:
        text = "kafka";
        break;
      case 7:
        text = "ftp";
        break;
      case 8:
        text = "http";
        break;
      case 9:
        text = "ES";
        break;
      case 10:
        text = "mongoDB";
        break;
      case 11:
        text = "hdfs";
        break;
      case 12:
        text = "hbase";
        break;
    }
    openDialog({
      text: text,
      type: "toggle-left",
      value: type ? type : record.type,
      id: record.id
    });
  };

  // 删除
  handleDelete = id => {
    let self = this;
    Dialog.confirm({
      title: "删除",
      content: "是否确定删除？",
      messageProps: {
        type: "warning"
      },
      onOk: async () => {
        let params = deleteTableById(id);
        let data = await request(params);
        if (data.code == 200) {
          Message.success(data.msg);
          self.getTableData();
        } else {
          Message.error(data.msg);
        }
      },
      onCancel: () => console.log("cancel")
    });
  };

  // 操作栏
  operationCell = (value, index, record) => {
    return (
      <Fragment>
        <a onClick={() => this.handleTest(record)} style={{ marginRight: "10px" }}>连接测试</a>
        <a onClick={() => this.handleEdit(record)} style={{ marginRight: "10px" }}>编辑</a>
        <a onClick={() => this.handleDelete(record.id)} style={{ color: "#ff3000" }}>删除</a>
      </Fragment>
    );
  };
  render() {
    const { pageNum, dataSource, total, pages, loading, columns } = this.state;
    return (
      <Table
        pageNum={pageNum}
        total={total}
        pages={pages}
        dataSource={dataSource}
        loading={loading}
        columns={columns}
        onPageChange={this.onPageChange}
        onSort={this.onSort}
      />
    );
  }
}
