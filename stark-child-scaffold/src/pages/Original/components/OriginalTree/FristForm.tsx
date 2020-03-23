import React from "react";
import {
  Button,
  Field,
  Form,
  Input,
  Select,
  Icon
} from '@alifd/next';
import styles from "./index.module.scss";
import _ from "lodash";

interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}

const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea; 

export default class FristForm extends React.Component<Props, States> {
  field = new Field(this);

  constructor(props) {
    super(props);
    this.state = {
      iconList: [
        {
          value: "biaoge",
          label: "biaoge"
        },
        {
          value: "shitumoshi",
          label: "shitumoshi"
        },
        {
          value: "zuzhijigou",
          label: "zuzhijigou"
        },
        {
          value: "ziduanguanli",
          label: "ziduanguanli"
        }
      ],
      basicFormData: {}
    }
  }
  
  componentDidMount () {
    this.field.setValues(this.props.basicFormData);
  }

  cancelHandle = () => {
    this.props.setDialogVisible();
  }

  nextStep = () => {
    this.field.validate(null, (errors, values) => {
      if (!errors) {
        this.setState({
          basicFormData: values
        })
        
        this.props.toNextStep(1, values);
      }
    });
  }

  render() {
    const { iconList } = this.state;
    const { systemList, modelTypeList } = this.props;
    return (
      <div className={styles.FristForm}>
        <div className={styles.formContent}>
          <Form inline field={this.field}>
            <FormItem label="元模型名称：" labelAlign="left">
              <Input placeholder="请输入元模型名称" name="name" />
            </FormItem>
            <FormItem label="元模型代码：" labelAlign="left">
              <Input placeholder="请输入元模型代码" name="code" />
            </FormItem>
            <FormItem label="所属系统：" labelAlign="left">
              <Select placeholder="请选择所属系统" name="belongSystem" style={{ width: "100%" }} >
                {
                  systemList.map((item) => (
                    <Option value={item.value} key={item.value}>{item.text}</Option>
                  ))
                }
              </Select>
            </FormItem>
            <FormItem label="元模型类型：" labelAlign="left">
              <Select placeholder="请选择元模型类型" name="type" style={{ width: "100%" }}>
                {
                  modelTypeList.map((item) => (
                    <Option value={item.value} key={item.value}>{item.text}</Option>
                  ))
                }
              </Select>
            </FormItem>
            <FormItem label="显示图标：" labelAlign="left">
              <Select placeholder="请选择显示图标" name="icon" style={{ width: "100%" }} >
                {
                  iconList.map((item) => (
                    <Option value={item.value} key={item.value}>
                      <Icon type={item.label} />
                    </Option>
                  ))
                }
              </Select>
            </FormItem>
            <FormItem label="描述信息：" labelAlign="left">
              <TextArea placeholder="请输入描述信息" name="description" />
            </FormItem>
          </Form>
        </div>
        <div className={styles.btnContent}>
          <Button text className={styles.cancelBtn} onClick={this.cancelHandle}>取消</Button>
          <Button type="primary" onClick={this.nextStep}>下一步</Button>
        </div>
      </div>
    )
  }
}