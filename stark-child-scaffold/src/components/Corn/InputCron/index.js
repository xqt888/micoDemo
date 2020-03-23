/*
 * @Description: 频率组件输入框形式
 * @Author: xuqiuting
 * @Date: 2019-12-05 10:15:00
 * @LastEditors: xuqiuting
 * @LastEditTime: 2019-12-16 09:27:46
 */
import React, { PureComponent } from "react";
import { Dropdown, Input,Balloon } from '@alifd/next';
import Cron from "../Cron";
import '../main.scss';
class InputCron extends PureComponent {
  
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      dateVisible: false,
      value
    };
  }
  
  // 根据props的值更新state
  static getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps && nextProps.value !== prevState.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  handleChange = value => {
    this.setState({
      value
    });
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  clear = () => {
    this.setState({
      value: null
    });
  };
  
  render() {
    const { dateVisible, value } = this.state;
    const { style, lang, type, width } = this.props;
    return (
      <Balloon
      triggerType="click"
      closable={false}
      offset={[0,-12]}
      visible={dateVisible}
      popupClassName={"cornWarper"}
      onVisibleChange={visible => this.setState({ dateVisible: visible })}
      trigger={
        <Input readOnly value={value} style={{ width }} />
      }
      >
         <Cron
             onChange={this.handleChange}
             value={value}
            style={style}
            lang={lang}
            type={type}
          />
      </Balloon>
    );
  }
}
export default InputCron;
