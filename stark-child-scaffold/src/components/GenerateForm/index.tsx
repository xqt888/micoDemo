/*
 * @Description: 表单生成器
 * @Author: Wenmin He
 * @Date: 2019-11-20 17:34:43
 * @LastEditors: Wenmin He
 * @LastEditTime : 2020-02-07 18:45:45
 */

import React from "react";
import PropTypes from "prop-types";
import {
  Form,
  Input,
  NumberPicker,
  Select,
  DatePicker,
  TimePicker,
  Radio,
  TreeSelect,
  CascaderSelect
} from "@alifd/next";
import styles from "./index.module.scss";


const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;
const { RangePicker, MonthPicker, YearPicker } = DatePicker;
const RadioGroup = Radio.Group;

interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}
export default class FormData extends React.Component<Props, States> {

  // 生成formItem
  generateFormFields = () => {
    let components = [];
    const { dataSource } = this.props;

    dataSource.map(item => {
      let Component = <label></label>;
      const { type, label, ...rest } = item;
      if (!rest.style) {
        rest.style = { minWidth: "320px" };
      }
      switch (type) {
        case "Input":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              pattern={item.pattern}
              patternMessage={item.patternmessage}
              disabled={item.disabled ? item.disabled : false}
            >
              <Input {...rest} />
            </FormItem>
          );
          break;
        case "NumberPicker":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <NumberPicker {...rest} />
            </FormItem>
          );
          break;
        case "TextArea":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <TextArea {...rest} />
            </FormItem>
          );
          break;
        case "Select":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <Select {...rest}>
                {item.options &&
                  item.options.map(({ label, value }, index) => (
                    <Option key={value + "_" + index} value={value}>
                      {label}
                    </Option>
                  ))}
                }
              </Select>
            </FormItem>
          );
          break;
        case "DatePicker":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <DatePicker {...rest} />
            </FormItem>
          );
          break;
        case "RangePicker":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <RangePicker {...rest} />
            </FormItem>
          );
          break;
        case "MonthPicker":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <MonthPicker {...rest} />
            </FormItem>
          );
          break;
        case "YearPicker":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <YearPicker {...rest} />
            </FormItem>
          );
          break;
        case "TimePicker":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <TimePicker {...rest} />
            </FormItem>
          );
          break;
        case "RadioGroup":
          const valueInfo = item.radioList[0] ? item.radioList[0].value : '';
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <RadioGroup
                name={item.name}
                shape={item.shape}
                defaultValue={valueInfo}
                onChange={(data) => { this.props.radioChange(data) }}
              >
                {
                  item.radioList &&
                  item.radioList.map(({ label, value }, index) => (
                    <Radio key={value + "_" + index} value={value} >
                      {label}
                    </Radio>
                  ))
                }
              </RadioGroup>
            </FormItem>
          );
          break;
        case "TreeSelect":
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <TreeSelect
                treeDefaultExpandAll
                treeCheckable
                dataSource={item.dataSource}
                style={{ width: "320px" }}
              />
            </FormItem>
          );
          break;
        case 'CascadeSelect':
          Component = (
            <FormItem
              label={label}
              key={label}
              labelAlign="left"
              required={item.required}
              asterisk={item.required ? true : false}
              requiredMessage={item.requiredMessage ? item.requiredMessage : item.placeholder}
              disabled={item.disabled ? item.disabled : false}
            >
              <CascaderSelect 
                dataSource={item.dataSource} 
                {...rest}
              />
            </FormItem>
          );
          break;
      }
      components.push(Component);
    });
    return components;
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div>{this.generateFormFields()}</div>
      </div>
    );
  }

}

FormData.propTypes = {
  dataSource: PropTypes.array.isRequired,
  radioChange: PropTypes.func
};

FormData.defaultProps = {
  dataSource: [],
  radioChange: () => { }
};

