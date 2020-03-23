/*
 * @Description: 拖拽组件
 * @Author: xuqiuting
 * @Date: 2020-02-07 15:15:09
 * @LastEditors  : xuqiuting
 * @LastEditTime : 2020-02-07 17:34:52
 */
import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

function DragDropContext(Target) {
  class Wrap extends React.Component {
    render() {
      return (
        <DndProvider backend={HTML5Backend}>
          <Target {...this.props} />
        </DndProvider>
      );
    }
  }
  return Wrap;
}
export default DragDropContext;
