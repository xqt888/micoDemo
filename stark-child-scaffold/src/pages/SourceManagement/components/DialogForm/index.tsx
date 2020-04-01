/*
 * @Description: 弹窗的表格部分
 * @Author: Wenmin He
 * @Date: 2019-11-18 18:04:26
 * @LastEditors  : Wenmin He
 * @LastEditTime : 2020-01-07 10:46:17
 */

import React ,{ useState, useEffect } from "react"; 
import styles from "./index.module.scss";
import GenerateForm from "../GenerateForm";
import formConfig from './formConfig';

export default function DialogForm (props) {
  const [isOrical, setIsOrical] = useState(false);

	const handleRadioChange = (data) => {
		setIsOrical(data == '2' ? true : false);
	}

  return (
		<div className={styles.formList}>
			<GenerateForm
				dataSource={formConfig(props, isOrical)}
				radioChange={handleRadioChange}
			/>
		</div>
	)
}
