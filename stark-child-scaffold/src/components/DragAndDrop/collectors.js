/*
 * @Description: 拖曳collector属性
 * @Author: xuqiuting
 * @Date: 2020-02-7 10:15:12
 * @LastEditors  : xuqiuting
 * @LastEditTime : 2020-02-07 15:17:05
 */
// 拖拉组件的collet
export const dragCollect = (connect, monitor) => { //把拖拽过程中需要信息注入组件的 props，接收两个参数 connect and monitor，必填。
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      clientOffset: monitor.getClientOffset(),
      initialClientOffset: monitor.getInitialClientOffset(),
      canDrag:monitor.canDrag(),
    }
  }
  
  // 接收组件的collet
  export const dropCollect = (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),//source是否在target上方
      canDrop: monitor.canDrop(),  // 是否可被放置
      sourceClientOffset: monitor.getSourceClientOffset(),
      isOverCurrent: monitor.isOver({shallow: true}),
    }
  }
  
  