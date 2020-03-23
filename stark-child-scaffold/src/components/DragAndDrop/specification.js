/*
 * @Description: 拖曳组件Hover逻辑处理
 * @Author: xuqiuting
 * @Date: 2020-02-07 10:15:12
 * @LastEditors  : xuqiuting
 * @LastEditTime : 2020-02-11 20:12:05
 */
/************实现拖动的各个方法处理*************/
import { findDOMNode } from "react-dom";
import { guid } from "@/utils/util";
import _ from "lodash";

// 菜单拖曳source
export const sourceSpec = {
  beginDrag(props) {
    // 返回需要注入的属性
    return {
      id: props.id,
      ...props
    };
  },
  endDrag(props, monitor) {}
};

//既可以拖曳又可以放置的source
export const dropSourceSpec = {
  beginDrag(props) {
    // 返回需要注入的属性
    return {
      id: props.id,
      ...props
    };
  },
  endDrag(props, monitor) {}
};

// 布局放置目标,不包括选项卡放置组件,也不包括布局卡
export const targetSpec = {
  hover(props, monitor, component) {},
  drop(props, monitor) {
    if (monitor.didDrop()) return;
    let dragItem = monitor.getItem();
    // 如果是从树里面拖拽出来的，然后再次hover
    if (dragItem.props && dragItem.props.config) {
      return ;
    }
    // 父级id数组
    let expandedKeys = props.expandedKeys;
    const parentArr = props.parentIndex;
    const propsDatasource = _.cloneDeep(props.dataSource);
    const toAreaIndex = props.areaIndex;
    let toDataSource = loopDataSource(parentArr, propsDatasource);
    let newItem ={};
    // 从左树拖出来的
    if (!dragItem.props) {
      newItem = {
        ...dragItem.config
      };
      if (toDataSource[toAreaIndex].children) {
        toDataSource[toAreaIndex].children.push(newItem);
      } else {
        toDataSource[toAreaIndex].children = [];
        toDataSource[toAreaIndex].children.push(newItem);
      }
      monitor.getItem().props = dragItem;
    } else {
      const fromExpandedKeys = dragItem.expandedKeys;
      const fromParentArr = dragItem.parentIndex;
      const fromAreaIndex = dragItem.areaIndex;
      let fromDataSource = loopDataSource(fromParentArr, propsDatasource);
      // 如果是同一个父级不做处理
      if (_.isEqual(parentArr, fromParentArr)) {
        return false;
      }
      fromDataSource.splice(fromAreaIndex, 1);
      newItem = {
        ...dragItem.props
      };
      if (toDataSource[toAreaIndex].children) {
        toDataSource[toAreaIndex].children.push(newItem);
      } else {
        toDataSource[toAreaIndex].children = [];
        toDataSource[toAreaIndex].children.push(newItem);
      }
      expandedKeys = [...expandedKeys, ...fromExpandedKeys];
      // 赋值阻止再次hover
      monitor.getItem().props.config = dragItem;
    }
    props.operationItem(propsDatasource, expandedKeys,newItem);
    return {
      ...props,
      id: props.id,
      isOver: monitor.isOver(),
      diffOffset: monitor.getDifferenceFromInitialOffset()
    };
  }
};

//既可以拖曳又可以放置的target
export const dropTargetSpec = {
  hover(props, monitor, component) {
    const dragItem = monitor.getItem();

    // 如果是从树里面拖拽出来的，然后再次hover
    if (dragItem.props && dragItem.props.config) {
      return false;
    }

    // 父级id数组
    let expandedKeys = props.expandedKeys;
    const parentArr = props.parentIndex;
    const propsDatasource = _.cloneDeep(props.dataSource);
    const toAreaIndex = props.areaIndex;
    let toDataSource = loopDataSource(parentArr, propsDatasource);
    let newItem={}
    // 从左树拖出来的
    if (!dragItem.props) {
       newItem = {
        ...dragItem.config
      };
      toDataSource.push(newItem);
      // 赋值阻止再次hover
      monitor.getItem().props = dragItem;
      // 不是从左树出来的
    } else {
      const fromExpandedKeys = dragItem.expandedKeys;
      const fromParentArr = dragItem.parentIndex;
      const fromAreaIndex = dragItem.areaIndex;
      let fromDataSource = loopDataSource(fromParentArr, propsDatasource);
      // 如果是同一个父级不做处理
      if (_.isEqual(parentArr, fromParentArr)) {
        return false;
      }
      fromDataSource.splice(fromAreaIndex, 1);
      newItem = {
        ...dragItem.props
      };
      toDataSource.push(newItem);
      expandedKeys = [...expandedKeys, ...fromExpandedKeys];
      // 赋值阻止再次hover
      monitor.getItem().props.config = dragItem;
    }
    props.operationItem(propsDatasource, expandedKeys,newItem);
  },
  drop(props, monitor, component) {
    if (monitor.didDrop()) return;
    // 操作要拖拉的组件
    return {
      ...props,
      id: props.id,
      isOver: monitor.isOver(),
      diffOffset: monitor.getDifferenceFromInitialOffset()
    };
  }
};

// 遍历拿到值
const loopDataSource = (arr, data) => {
  if (arr.length > 0) {
    let newArr = _.cloneDeep(arr);
     newArr.splice(0,1);
    return loopDataSource(newArr,data[arr[0]].children)
  } else {
    return data;
  }
};
