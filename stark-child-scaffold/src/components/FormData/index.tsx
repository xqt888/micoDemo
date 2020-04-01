/*
 * @Description: form表单
 * @Author: xuqiuting
 * @Date: 2019-11-12 10:46:09
 * @LastEditors: xuqiuting
 * @LastEditTime: 2019-12-05 10:45:49
 */
import React ,{ useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Field,
  Input,
  NumberPicker,
  Select,
  DatePicker,
  TimePicker,
  Button,
  Radio,
} from "@alifd/next";
import styles from "./index.module.scss";

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const Option = Select.Option;
const { RangePicker, MonthPicker, YearPicker } = DatePicker;
const RadioGroup = Radio.Group;

export default function FormData(props) {
  let myfield = Field.useField();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(props.dataSource)
  }, [props.dataSource]);

  // 查询
  const handleSearch = () => {
    myfield.validate(null, (errors, values) => {
      if (!errors) {
        console.log(values, "values");
        props.handleSubmit(values);
      }
    });
  };

  // 重置
  const handleReset = () => {
    props.handleReset();
  };

  // 生成formItem
  const generateFormFields = () => {
    let components = [];
   
    dataSource.map(item => {
      let Component = <label></label>;
      const { type, label, ...rest } = item;
      if (!rest.style) {
        rest.style = { minWidth: "200px" };
      }
      switch (type) {
        case "Input":
          Component = (
            <FormItem label={label} key={label} labelAlign="left">
              <Input {...rest} />
            </FormItem>
          );
          break;
        case "NumberPicker":
          Component = (
            <FormItem label={label} key={label} labelAlign="left">
              <NumberPicker {...rest} />
            </FormItem>
          );
          break;
        case "TextArea":
          Component = (
            <FormItem label={label} key={label} labelAlign="left">
              <TextArea {...rest} />
            </FormItem>
          );
          break;
        case "Select":
          Component = (
            <FormItem label={label} key={label} labelAlign="left">
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
            <FormItem label={label} key={label} labelAlign="left">
              <DatePicker {...rest} />
            </FormItem>
          );
          break;
        case "RangePicker":
          Component = (
            <FormItem label={label} key={label} labelAlign="left">
              <RangePicker {...rest} />
            </FormItem>
          );
          break;
        case "MonthPicker":
          Component = (
            <FormItem label={label} key={label} labelAlign="left">
              <MonthPicker {...rest} />
            </FormItem>
          );
          break;
        case "YearPicker":
          Component = (
            <FormItem label={label} key={label} labelAlign="left">
              <YearPicker {...rest} />
            </FormItem>
          );
          break;
        case "TimePicker":
          Component = (
            <FormItem label={label} key={label} labelAlign="left">
              <TimePicker {...rest} />
            </FormItem>
          );
          break;
        case "RadioGroup":
          Component = (
            <FormItem label={label} key={label} labelAlign="left">
              <RadioGroup shape={item.shape}>
                {
                  item.radioList && 
                    item.radioList.map(({ label, value }, index) => (
                      <Radio key={value + "_" + index} value={value}>
                        {label}
                      </Radio>
                    ))
                }
              </RadioGroup>
            </FormItem>
          );
      }
      components.push(Component);
    });
    return components;
  };
  
  
  return (
    <div style={{display: "inline-block"}}>
      <Form inline field={myfield} style={{display: "inline-block"}}>
        <div className={styles.wrapper}>
          <div className={styles.left}>{generateFormFields()}</div>
          <div className={styles.right}>
            <Button
              type="primary"
              className="mr10"
              onClick={() => handleSearch()}
            >
              查询
            </Button>
            <Form.Reset onClick={() => handleReset()}>重置</Form.Reset>
          </div>
        </div>
      </Form>
    </div>
  );
}

FormData.propTypes = {
  dataSource: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func,
  handleReset: PropTypes.func
};

FormData.defaultProps = {
  dataSource: [],
  handleSubmit: () => {},
  handleReset: () => {}
};
