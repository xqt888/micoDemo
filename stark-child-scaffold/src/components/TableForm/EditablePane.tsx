/*
 * @Description: 可编辑的单元格
 * @Author: Wenmin He
 * @Date: 2019-12-03 14:44:16
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-02-26 17:50:13
 */


import React from "react";
import { Input, Select, Icon, Message, NumberPicker, Checkbox } from '@alifd/next';

import styles from "./index.module.scss";

interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}
const Option = Select.Option;

export default class EditablePane extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      cellTitle: props.defaultTitle,
      defalutValue: props.defalutValue,
      type: props.type,
      options: props.options,
      editable: false,
      isNew: props.isNew,
      stateText: "",
      isDisabled: props.isDisabled,
      canBeEdit: props.canBeEdit
    };
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.toBeEditable();
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      canBeEdit: newProps.canBeEdit
    })
  }

  onKeyDown = (e) => {
    const { keyCode } = e;
    if (keyCode > 36 && keyCode < 41) {
      e.stopPropagation();
    }
  }

  onBlur = (e) => {
    if (this.state.isNew && e.target.value == "") {
      return
    }
    if (this.props.isRequired && e.target.value == "" && !this.state.isNew) {
      this.setState({
        stateText: "error"
      })
      Message.error("该字段不能为空！");
      return;
    } else if (this.props.isRequired && e.target.value) {
      this.setState({
        stateText: ""
      })
    }
    this.setState({
      editable: false,
      cellTitle: e.target.value,
      isNew: false
    });
    const { fieldName, index, changeData } = this.props;
    changeData(fieldName, index, e.target.value);
  }

  selectOnBlur = (e) => {
    if (this.state.isNew && this.state.cellTitle == "") {
      return
    }

    this.setState({
      editable: false,
      isNew: false
    });
  }

  selectChange = (data) => {
    this.setState({
      cellTitle: data,
      defalutValue: this.valueToLabelText(data)
    });
    const { fieldName, index } = this.props;
    this.props.changeData(fieldName, index, data);
  }

  toBeEditable = () => {
    if (!this.state.canBeEdit) {
      return;
    }
    this.setState({
      editable: true
    });
  }

  valueToLabelText = (value) => {
    let text = "";
    this.props.options.map(item => {
      if (item.value == value) {
        text = item.label;
      }
    })
    return text;
  }

  checkboxChange = (value) => {
    const { fieldName, index, changeData } = this.props;
    changeData(fieldName, index, value);
  }

  render() {
    const { cellTitle, defalutValue, editable, type, options, stateText, isDisabled, canBeEdit } = this.state;
    if (editable) {
      if (type === "INPUT") {
        return (
          <Input
            autoFocus
            defaultValue={cellTitle}
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur}
            style={{ width: "100%" }}
            aria-live="assertive"
            aria-label="error"
            state={stateText}
            disabled={isDisabled}
          />
        );
      } else if (type === "SELECT") {
        return (
          <Select
            defaultValue={cellTitle}
            onBlur={this.selectOnBlur}
            onChange={this.selectChange}
            aria-live="assertive"
            aria-label="error"
            state={stateText}
            disabled={isDisabled}
            style={{ width: "100%" }}
          >
            {
              options &&
              options.map(({ label, value }, index) => (
                <Option key={value + "_" + index} value={value}>
                  {label}
                </Option>
              ))}
            }
          </Select>
        )
      } else if (type === "NUMPICKER") {
        return (
          <NumberPicker
            autoFocus
            defaultValue={cellTitle}
            onBlur={this.onBlur}
            style={{ width: "100%" }}
            aria-live="assertive"
            aria-label="error"
            state={stateText}
            disabled={isDisabled}
          />
        )
      } else if (type === "CHECKBOX") {
        return (
          <Checkbox
            defaultChecked={cellTitle}
            onChange={this.checkboxChange}
            disabled={isDisabled}
          >
          </Checkbox>
        )
      }
    }
    return (
      <p className={styles.textInfo}>
        {
          ((cellTitle === true) || (cellTitle === false)) ?
            <Checkbox
              defaultChecked={cellTitle}
            >
            </Checkbox>
            :
            <span onDoubleClick={this.toBeEditable}>
              {
                defalutValue ? defalutValue : cellTitle
              }
            </span>
        }
        {
          canBeEdit ?
            <Icon type="edit" className={styles.editIcon} onClick={this.toBeEditable} />
            : ""
        }
      </p>
    )
  }
}

EditablePane.defaultProps = {
  defaultTitle: "",
  defalutValue: "",
  type: "INPUT",
  options: [],
  isNew: false,
  index: 0,
  fieldName: "",
  changeData: () => { },
  isRequired: false,
  canBeEdit: true,
  isDisabled: false
}
