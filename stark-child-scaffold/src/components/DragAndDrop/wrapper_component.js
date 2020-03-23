/*
 * @Description: 拖拉对外暴露组件
 * @Author: xuqiuting
 * @Date: 2019-06-05 10:15:12
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-02-28 15:46:19
 */
import React, { Component } from "react";
import { DragSource, DropTarget } from "react-dnd";
import { ItemTypes } from "./item_types";
import {
  sourceSpec,
  targetSpec,
  dropTargetSpec,
  dropSourceSpec,
} from "./specification";
import { dragCollect, dropCollect } from "./collectors";

// 用于左树的拖拉源
class DragSourceComponent extends Component {
  render() {
    const { connectDragSource, children } = this.props;
    const opacity = 1;
    return (
      connectDragSource &&
      connectDragSource(<div style={{ opacity,cursor:"pointer" }} >{children}</div>)
    );
  }
}

// 用于布局的target
class DropTargetComponent extends Component {
  render() {
    const {
      connectDropTarget,
      style,
      children,
      page,
      isOverCurrent
    } = this.props;

    // let height = getSize().windowH;
    // let scrollHeight = 0;
    // const { system } = page;
    // // 如果是编辑状态
    // if (page.editPage) {
    //   // 如果有banner
    //   if (system && system.banner) {
    //     scrollHeight = height - 175 - 120;
    //   } else {
    //     scrollHeight = height - 86 - 120;
    //   }
    //   scrollHeight = scrollHeight - 50;
    // }

    let className = "";
   
    if (isOverCurrent) {
      className = className + " drop_hover";
    }
    return (
      connectDropTarget &&
      connectDropTarget(
        <div
          // className={className}
          // style={{ minHeight: scrollHeight, ...style }}
        >
          {children}
        </div>
      )
    );
  }
}

// 普通的，用于拖拉并且hover之后，可以根据hover的位置放置组件，
class DragSourceTargetComponent extends Component {
  // static defaultProps = {
  //   handleEdit: () => {}, // 编辑方法
  //   handleClose: () => {} // 删除
  // };

  // componentDidMount() {
  //   if (this.props.props && this.props.props.cardProps) {
  //     const { imgUrl } = this.props.props.cardProps;
  //     const img = new Image();
  //     img.onload = () =>
  //       this.props.connectDragPreview && this.props.connectDragPreview(img);
  //     img.src = imgUrl;
  //   }
  // }

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      children,
      isOverCurrent
    } = this.props;

    let classname = "";
    if (isOverCurrent) {
      classname = "boxHover";
    }
    let opacity = isOverCurrent ? 0 : 1;
    // console.log(opacity,"opacity")
    return (
      connectDropTarget &&
      connectDragSource &&
      connectDragSource(
        connectDropTarget(
          <div
            // className={classname}
          >
            <div style={{ opacity }}> {children}</div>
          </div>
        )
      )
    );
  }
}

// 菜单拖曳
const DragSourceWrapper = DragSource(
  ItemTypes.DragMenu,
  sourceSpec,
  dragCollect
)(DragSourceComponent);
// 普通布局放置组件
const DropTargetWrapper = DropTarget(ItemTypes.Drop, targetSpec, dropCollect)(
  DropTargetComponent
);
// 普通的既可以拖曳又可以放置，并不是真正的放置在里面，只是为了hover
DragSourceTargetComponent = DropTarget(
  ItemTypes.Drop,
  dropTargetSpec,
  dropCollect
)(DragSourceTargetComponent);
const DragSourceTargetWrapper = DragSource(
  ItemTypes.Element,
  dropSourceSpec,
  dragCollect
)(DragSourceTargetComponent);


export {
  DragSourceWrapper,
  DropTargetWrapper,
  DragSourceTargetWrapper,
};
