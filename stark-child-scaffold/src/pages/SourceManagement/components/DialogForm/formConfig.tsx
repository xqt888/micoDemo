export default (value, isOrical) => {
	let formItem = Array();
	const ipPattern = 	/^[0-9.]+$/
	// /^(\d{1}|[1-9]{1}\d{1}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1}|[1-9]{1}\d{1}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1}|[1-9]{1}\d{1}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1}|[1-9]{1}\d{1}|1\d\d|2[0-4]\d|25[0-5])$/;
	const ipPattermMessage = "请输入正确的IP！"
	const portPattern = /^[0-9]+$/
	// /^[1-9]$|(^[1-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5]$)/;
	const portMessage = "请输入正确的端口号！";
	switch (value.typeValue) {
		case 5: // hive
			formItem = [
				{
					type: "Input",
					label: "数据源名称：",
					name: "name",
					placeholder: "请输入数据源名称",
					required: true
				},
				{
					type: "TextArea",
					label: "数据源描述：",
					name: "remark",
					placeholder: "请输入数据源描述"
        },
        {
          type: "Select",
          label: "所属系统：",
          name: "sysCode",
          placeholder: "请选择所属系统",
          required: true,
          options: value.sysCodeList
        },
				{
					type: "Input",
					label: "IP主机名：",
					name: "host",
					placeholder: "请输入IP主机名",
					required: true,
					// pattern: ipPattern,
					patternmessage: ipPattermMessage
				},
				{
					type: "Input",
					label: "端口：",
					name: "port",
					placeholder: "请输入端口",
					required: true,
					pattern: portPattern,
					patternmessage: portMessage
				},
				{
					type: "Input",
					label: "用户名：",
					name: "userName",
					placeholder: "请输入用户名",
					required: false
				},
				{
					type: "Input",
					label: "密码：",
					htmlType: "password",
					name: "password",
					placeholder: "请输入密码",
				},
				{
					type: "Input",
					label: "数据库名：",
					name: "schemaName",
					placeholder: "请输入数据库名",
				},
				{
					type: "RadioGroup",
					label: "是否安全认证：",
					name: "kerberos",
					radioList: [
						{
							value: 1,
							label: "是"
						},
						{
							value: 0,
							label: "否"
						}
					],
					required: true
				},
				{
					type: "Input",
					label: "principal：",
					name: "principal",
					placeholder: "请输入principal"
        },
        {
          type: "Input",
          label: "责任人",
          name: "responsiblePeople",
          placeholder: "请输入责任人",
          required: true
        },
        {
          type: "Input",
          label: "责任部门",
          name: "responsibleDepartment",
          placeholder: "请输入责任部门",
          required: true
        }
			]
		break;
		case 6: // kafka
			formItem = [
				{
					type: "Input",
					label: "数据源名称：",
					name: "name",
					placeholder: "请输入数据源名称",
					required: true
				},
				{
					type: "TextArea",
					label: "数据源描述：",
					name: "remark",
					placeholder: "请输入数据源描述"
        },
        {
          type: "Select",
          label: "所属系统：",
          name: "sysCode",
          placeholder: "请选择所属系统",
          required: true,
          options: value.sysCodeList
        },
				{
					type: "Input",
					label: "IP主机名：",
					name: "host",
					placeholder: "请输入IP主机名",
					required: true,
					// pattern: ipPattern,
					patternmessage: ipPattermMessage
				},
				{
					type: "Input",
					label: "端口：",
					name: "port",
					placeholder: "请输入端口",
					required: true,
					pattern: portPattern,
					patternmessage: portMessage
        },
        {
          type: "Input",
          label: "责任人",
          name: "responsiblePeople",
          placeholder: "请输入责任人",
          required: true
        },
        {
          type: "Input",
          label: "责任部门",
          name: "responsibleDepartment",
          placeholder: "请输入责任部门",
          required: true
        }
			]
		break;
		case 7: // ftp
			formItem = [
				{
					type: "Input",
					label: "数据源名称：",
					name: "name",
					placeholder: "请输入数据源名称",
					required: true
				},
				{
					type: "TextArea",
					label: "数据源描述：",
					name: "remark",
					placeholder: "请输入数据源描述"
        },
        {
          type: "Select",
          label: "所属系统：",
          name: "sysCode",
          placeholder: "请选择所属系统",
          required: true,
          options: value.sysCodeList
        },
				{
					type: "Input",
					label: "IP主机名：",
					name: "host",
					placeholder: "请输入IP主机名",
					required: true,
					// pattern: ipPattern,
					patternmessage: ipPattermMessage
				},
				{
					type: "Input",
					label: "端口：",
					name: "port",
					placeholder: "请输入主机端口",
					required: true,
					pattern: portPattern,
					patternmessage: portMessage
				},
				// {
				// 	type: "Input",
				// 	label: "路径：",
				// 	name: "url",
				// 	placeholder: "请输入路径",
				// 	required: true
				// },
				{
					type: "Input",
					label: "用户名：",
					name: "userName",
					placeholder: "请输入用户名",
					required: true
				},
				{
					type: "Input",
					label: "密码：",
					htmlType: "password",
					name: "password",
					placeholder: "请输入密码",
        },
        {
          type: "Input",
          label: "责任人",
          name: "responsiblePeople",
          placeholder: "请输入责任人",
          required: true
        },
        {
          type: "Input",
          label: "责任部门",
          name: "responsibleDepartment",
          placeholder: "请输入责任部门",
          required: true
        }
			]
		break;
		case "db": // 数据库
			formItem = [
				{
					type: "RadioGroup",
					label: "数据库类型：",
					name: "dbType",
					shape: "button",
					radioList: [
						{
							value: 1,
							label: "mysql"
						},
						{
							value: 2,
							label: "oracle"
						},
						{
							value: 3,
							label: "sqlserver"
						},
						{
							value: 4,
							label: "postgresql"
						}
					]
				},
				{
					type: "Input",
					label: "数据源名称：",
					name: "name",
					placeholder: "请输入数据源名称",
					required: true
				},
				{
					type: "TextArea",
					label: "数据源描述：",
					name: "remark",
					placeholder: "请输入数据源描述"
        },
        {
          type: "Select",
          label: "所属系统：",
          name: "sysCode",
          placeholder: "请选择所属系统",
          required: true,
          options: value.sysCodeList
        },
				{
					type: "Input",
					label: "IP主机名：",
					name: "host",
					placeholder: "请输入IP主机名",
					required: true,
					// pattern: ipPattern,
					patternmessage: ipPattermMessage
				},
				{
					type: "Input",
					label: "端口：",
					name: "port",
					placeholder: "请输入端口",
					required: true,
					pattern: portPattern,
					patternmessage: portMessage
				},
				{
					type: "Input",
					label: "用户名：",
					name: "userName",
					placeholder: "请输入用户名",
					required: true
				},
				{
					type: "Input",
					label: "密码：",
					htmlType: "password",
					name: "password",
					placeholder: "请输入密码",
				},
				{
					type: "Input",
					label: isOrical ? "ServiceName：" : "数据库名：",
					name: "schemaName",
					placeholder: "请输入数据库名",
					required: true
        },
        {
          type: "Input",
          label: "责任人",
          name: "responsiblePeople",
          placeholder: "请输入责任人",
          required: true
        },
        {
          type: "Input",
          label: "责任部门",
          name: "responsibleDepartment",
          placeholder: "请输入责任部门",
          required: true
        }
			]
		break;
		case 8: // http
			formItem = [
				{
					type: "Input",
					label: "数据源名称：",
					name: "name",
					placeholder: "请输入数据源名称",
					required: true
				},
				{
					type: "TextArea",
					label: "数据源描述：",
					name: "remark",
					placeholder: "请输入数据源描述"
        },
        {
          type: "Select",
          label: "所属系统：",
          name: "sysCode",
          placeholder: "请选择所属系统",
          required: true,
          options: value.sysCodeList
        },
				{
					type: "Input",
					label: "URL：",
					name: "url",
					placeholder: "请输入连接地址信息",
					required: true
				},
				{
					type: "Select",
					label: "请求类型:",
					name: "requestType",
					options: [
						{
							value: "get",
							label: "GET"
						},
						{
							value: "post",
							label: "POST"
						}
					],
					required: true
				},
				{
					type: "Input",
					label: "请求参数：",
					name: "requestParam",
					placeholder: "请输入请求参数"
        },
        {
          type: "Input",
          label: "责任人",
          name: "responsiblePeople",
          placeholder: "请输入责任人",
          required: true
        },
        {
          type: "Input",
          label: "责任部门",
          name: "responsibleDepartment",
          placeholder: "请输入责任部门",
          required: true
        }
			]
		break;
		case 9: // ES
			formItem =  [
				{
					type: "Input",
					label: "数据源名称：",
					name: "name",
					placeholder: "请输入数据源名称",
					required: true
				},
				{
					type: "TextArea",
					label: "数据源描述：",
					name: "remark",
					placeholder: "请输入数据源描述"
        },
        {
          type: "Select",
          label: "所属系统：",
          name: "sysCode",
          placeholder: "请选择所属系统",
          required: true,
          options: value.sysCodeList
        },
				{
					type: "Input",
					label: "IP主机名：",
					name: "host",
					placeholder: "请输入IP主机名",
					required: true,
					// pattern: ipPattern,
					patternmessage: ipPattermMessage
				},
				{
					type: "Input",
					label: "端口：",
					name: "port",
					placeholder: "请输入端口",
					required: true,
					pattern: portPattern,
					patternmessage: portMessage
        },
        {
					type: "Input",
					label: "用户名：",
					name: "userName",
					placeholder: "请输入用户名"
				},
				{
					type: "Input",
					label: "密码：",
					htmlType: "password",
					name: "password",
          placeholder: "请输入密码"
				},
        {
          type: "Input",
          label: "责任人",
          name: "responsiblePeople",
          placeholder: "请输入责任人",
          required: true
        },
        {
          type: "Input",
          label: "责任部门",
          name: "responsibleDepartment",
          placeholder: "请输入责任部门",
          required: true
        }
			]
		break;
		case 10: // mongoDB
			formItem = [
				{
					type: "Input",
					label: "数据源名称：",
					name: "name",
					placeholder: "请输入数据源名称",
					required: true
				},
				{
					type: "TextArea",
					label: "数据源描述：",
					name: "remark",
					placeholder: "请输入数据源描述"
        },
        {
          type: "Select",
          label: "所属系统：",
          name: "sysCode",
          placeholder: "请选择所属系统",
          required: true,
          options: value.sysCodeList
        },
				{
					type: "Input",
					label: "IP主机名：",
					name: "host",
					placeholder: "请输入IP主机名",
					required: true,
					// pattern: ipPattern,
					patternmessage: ipPattermMessage
				},
				{
					type: "Input",
					label: "端口：",
					name: "port",
					placeholder: "请输入端口",
					required: true,
					pattern: portPattern,
					patternmessage: portMessage
				},
				{
					type: "Input",
					label: "库名：",
					name: "schemaName",
					placeholder: "请输入库名",
					required: true
				},
				{
					type: "Input",
					label: "用户名：",
					name: "userName",
					placeholder: "请输入用户名",
					required: true
				},
				{
					type: "Input",
					label: "密码：",
					htmlType: "password",
					name: "password",
					placeholder: "请输入密码",
        },
        {
          type: "Input",
          label: "责任人",
          name: "responsiblePeople",
          placeholder: "请输入责任人",
          required: true
        },
        {
          type: "Input",
          label: "责任部门",
          name: "responsibleDepartment",
          placeholder: "请输入责任部门",
          required: true
        }
			]
    break;
    case 13: // greenplum
			formItem = [
				{
					type: "Input",
					label: "数据源名称：",
					name: "name",
					placeholder: "请输入数据源名称",
					required: true
				},
				{
					type: "TextArea",
					label: "数据源描述：",
					name: "remark",
					placeholder: "请输入数据源描述"
        },
        {
          type: "Select",
          label: "所属系统：",
          name: "sysCode",
          placeholder: "请选择所属系统",
          required: true,
          options: value.sysCodeList
        },
				{
					type: "Input",
					label: "IP主机名：",
					name: "host",
					placeholder: "请输入IP主机名",
					required: true,
					// pattern: ipPattern,
					patternmessage: ipPattermMessage
				},
				{
					type: "Input",
					label: "端口：",
					name: "port",
					placeholder: "请输入端口",
					required: true,
					pattern: portPattern,
					patternmessage: portMessage
				},
				{
					type: "Input",
					label: "用户名：",
					name: "userName",
					placeholder: "请输入用户名",
          required: true
				},
				{
					type: "Input",
					label: "密码：",
					htmlType: "password",
					name: "password",
          placeholder: "请输入密码",
          required: true
				},
				{
					type: "Input",
					label: "数据库名：",
					name: "schemaName",
          placeholder: "请输入数据库名",
          required: true
				},
        {
          type: "Input",
          label: "责任人",
          name: "responsiblePeople",
          placeholder: "请输入责任人",
          required: true
        },
        {
          type: "Input",
          label: "责任部门",
          name: "responsibleDepartment",
          placeholder: "请输入责任部门",
          required: true
        }
			]
		break;
	}
	return formItem;
}