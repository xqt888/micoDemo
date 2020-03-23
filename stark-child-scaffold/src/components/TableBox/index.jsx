import React from "react";
import { Table, Pagination } from "@alifd/next";
import styles from "./index.module.scss";
import PropTypes from "prop-types";
import { getSize, getOffset } from "@/utils/util";

class TableBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: getSize().windowH,
      width: getSize().windowW,
      offsetTop: 0,
      offsetLeft: 0
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.onWindowResize();
  }

  componentDidUpdate(preProps, preState) {
    // console.log(preProps,this.props,"######################WWW")
    let newTop = 0;
    if (this.tableRef) {
      newTop = getOffset(this.tableRef).top;
    //   console.log("11111111111111111111",this.state.offsetTop,newTop,this.tableRef)
      if (newTop != this.state.offsetTop) {
        this.onWindowResize();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onWindowResize);
  }

  onWindowResize = () => {
    let offsetLeft = 0;
    let offsetTop = 0;
    if (this.tableRef) {
      offsetLeft = getOffset(this.tableRef).left;
      offsetTop = getOffset(this.tableRef).top;
    }
    this.setState({
      height: getSize().windowH - offsetTop - 30,
      width: getSize().windowW - offsetLeft - 40,
      offsetTop: offsetTop
    });
  };

  render() {
    const {
      dataSource,
      columns,
      total,
      pageNum,
      pages,
      fixedHeader,
      onPageChange,
      pageSize,
      pagination,
      propsWidth,
      propsOffsetHeight,
      ...rest
    } = this.props;
    
    const { height, width } = this.state;
    let tableHeight = pagination ? height - 62 :height-20;
    if(propsOffsetHeight){
      tableHeight=tableHeight-propsOffsetHeight
    }
    return (
      <div
        className={styles.wraper}
        style={{ width:propsWidth?propsWidth: width + "px" }}
        ref={ref => (this.tableRef = ref)}
      >
        <div style={{ height: tableHeight }}>
          <Table
            dataSource={dataSource}
            maxBodyHeight={tableHeight - 52}
            fixedHeader={fixedHeader ? fixedHeader : true}
            {...rest}
          >
            {columns.map((item, index) => (
              <Table.Column key={index} {...item} />
            ))}
          </Table>
        </div>
        {pagination && (
          <div className={styles.pagination}>
            <div className={styles.paginationLeft}>
              共&nbsp;{total}&nbsp;条记录&nbsp;第&nbsp;{pageNum}/{pages}&nbsp;页
            </div>
            <Pagination
              total={total}
              current={pageNum}
              pageSize={pageSize ? pageSize : 10}
              shape="arrow-only"
              onChange={onPageChange}
              className="page-demo"
            />
          </div>
        )}
      </div>
    );
  }
}

TableBox.propTypes = {
  dataSource: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

TableBox.defaultProps = {
  dataSource: [],
  columns: [],
  total: 0,
  pageNum: 0,
  pages: 0,
  pagination: true
};

export default TableBox;
