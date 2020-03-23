import React from "react";
import {
  Button,
  Form,
  Field,
  Message
} from '@alifd/next';
import TableForm from "@/components/TableForm";
import _ from "lodash";
import { request } from '@/utils/request';
import { saveMetaModel } from '../../service';
import styles from "./index.module.scss";
import PropTypes from "prop-types";

interface Props {
  [propName: string]: any;
}
interface States {
  [propName: string]: any;
}


export default class SecondForm extends React.Component<Props, States> {
  field = new Field(this);
  constructor(props) {
    super(props);
    this.state = {
      canBeEdit: props.canBeEdit,
      dataList: this.props.attrFormData || [], // 表格原来的数据
      headerColumn: [  // 表头配置及表单类型配置
        {
          title: "属性代码",
          dataIndex: "code",
          type: "INPUT",
          isRequired: false
        },
        {
          title: "属性名称",
          dataIndex: "name",
          type: "INPUT",
          isRequired: false
        },
        {
          title: "是否只读",
          dataIndex: "isReadOnly",
          type: "CHECKBOX",
          isRequired: false
        },
        {
          title: "是否为空",
          dataIndex: "isNull",
          type: "CHECKBOX",
          isRequired: false
        },
        {
          title: "长度",
          dataIndex: "length",
          type: "NUMPICKER",
          isRequired: false
        },
        {
          title: "展现方式",
          dataIndex: "showType",
          width: 170,
          type: "SELECT",
          options: this.props.showTypeList,
          isRequired: true
        },
      ],
      dataItem: {  // 所有字段的初始值
        code: '',
        name: '',
        showType: '',
        isNull: false,
        length: 10,
        isReadOnly: false,
        isNew: true  // 必须要有此字段
      },
      tableFormRef: {},
      submitLoading: false
    }
  }
  
  componentWillReceiveProps (newProps) {
    this.setState({
      canBeEdit: newProps.canBeEdit
    })
  }

  componentDidMount () {
    if (this.props.getSecondFormRef) {
      this.props.getSecondFormRef(this);
    }
  }

  cancelHandle = () => {
    this.props.setDialogVisible();
  }
  

  nextStep = async () => {
    this.setState({
      submitLoading: true
    })
    // 从组件中获取表单的值
    const attrFormData = this.state.tableFormRef.state.dataList;
    let metaModelPkgId = {
      metaModelPkgId: this.props.currentSelectData.id
    }
    let ajaxData = { ...this.props.basicFormData, ...metaModelPkgId, ...{ props: attrFormData } };
    const params = saveMetaModel(ajaxData);
    const res = await request(params);
    this.setState({
      submitLoading: false
    })
    if (res.code == 200) {
      this.cancelHandle();
      this.props.getTreeList();
      Message.success(res.msg);
    } else {
      Message.error(res.msg)
    }
  }

  // 获取TableForm的this指向
  onRef = (ref) => {
    this.setState({
      tableFormRef: ref
    });
  }

  // 上一步
  prevStep = () => {
    let dataList = _.cloneDeep(this.state.dataList);
    dataList.map(item => {
      item.isNew = false;
      return item;
    })
    this.props.setPrevStep(0, dataList);
  }

  render() {
    const { dataList, headerColumn, dataItem, submitLoading, canBeEdit } = this.state;
    const { toBeForm} = this.props;
    return (
      <div className={styles.SecondForm}>
        <div className={styles.formContent}>
          <Form field={this.field}>
            <TableForm
              dataList={dataList}
              headerColumn={headerColumn}
              dataItem={dataItem}
              onRef={this.onRef}
              canBeEdit={canBeEdit}
            />
          </Form>
        </div>
        {
          toBeForm ?
            <div className={styles.btnContent}>
              <Button text className={styles.cancelBtn} onClick={this.cancelHandle}>取消</Button>
              <Button type="normal" className={styles.mr10} onClick={this.prevStep}>上一步</Button>
              <Button type="primary" onClick={this.nextStep} loading={submitLoading}>保存</Button>
            </div>
            : ""
        }
      </div>
    )
  }
}

SecondForm.propTypes = {
  canBeEdit: PropTypes.bool
};

SecondForm.defaultProps = {
  canBeEdit: true
};