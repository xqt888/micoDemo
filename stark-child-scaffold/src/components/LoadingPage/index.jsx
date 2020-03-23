/*
 * @Description: 页面加载loading
 * @Author: xuqiuting
 * @Date: 2019-12-05 14:56:14
 * @LastEditors: xuqiuting
 * @LastEditTime: 2019-12-10 09:45:18
 */
import React from "react";
import QueueAnim from "rc-queue-anim";

export default class _Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <QueueAnim
        style={{
          height: "100%",
          width: "100%"
        }}
        type={["left"]}
        className="queueAnim"
        duration={1200}
        onEnd={() => {
          // 完成后设置transform为默认值
          const queueAnimList = document.getElementsByClassName("queueAnim");
          for (let index = 0; index < queueAnimList.length; index++) {
            const element = queueAnimList[index];
            const div = element.querySelector("div");
            if (div) {
              div.style.transform = "inherit";
            }
          }
        }}
      >
        <div
          key="page"
          style={{
            height: "100%",
            width: "100%"
          }}
        >
          {children}
        </div>
      </QueueAnim>
    );
  }
}