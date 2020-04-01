/*
 * @Description: 新增弹窗的第一页，选择数据源类型
 * @Author: Wenmin He
 * @Date: 2019-11-18 18:04:26
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-03-03 15:27:33
 */
import React from 'react';
import { Icon, Grid } from "@alifd/next";
import styles from "./index.module.scss";

interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}

const { Row, Col } = Grid;
const list = [
  [
    {
      type: 'hive1',
      text: 'hive',
      value: 5
    },
    {
      type: 'kafka',
      text: 'kafka',
      value: 6
    },
    {
      type: 'ftp_',
      text: 'ftp',
      value: 7
    },
    {
      type: 'shujuku',
      text: '数据库',
      value: 'db'
    },
  ],
  [
    // 	{
    // 		type: 'http',
    // 		text: 'http',
    // 		value: 8
    // 	},
    {
      type: 'Es',
      text: 'Es',
      value: 9
    },
    // 	{
    // 		type: 'mongoDB',
    // 		text: 'mongoDB',
    // 		value: 10
    // 	},
    {
      type: 'mongoDB',
      text: 'greenplum',
      value: 13
    },
  ]
]

export default class FirstDialogContent extends React.Component<Props, States> {
  // 选择分类后的把值传回给父组件
  handleClick(data) {
    this.props.sendResult(data);
  }

  render() {
    return (
      <div className={styles.list}>
        {
          list.map((item, idx) => {
            return (
              <Row className={styles.rowList} key={idx}>
                {
                  item.map((obj) => {
                    return (
                      <Col
                        span="6"
                        key={obj.value}
                        className={styles.colItem}
                        onClick={() => { this.handleClick(obj) }}
                      >
                        <Icon type={obj.type} className={styles.icon} />
                        <p className={styles.text}>{obj.text}</p>
                      </Col>
                    )
                  })
                }
              </Row>
            )
          })
        }
      </div>
    )
  }
}
