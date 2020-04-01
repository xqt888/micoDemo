/*
 * @Description: 数据源管理接口参数
 * @Author: Wenmin He
 * @Date: 2019-11-14 09:53:49
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-06 16:44:06
 */
// 获取数据源类型
export const getSourceType = (params) => {
  return {
    url: `/convergeApi/common/getSourceType`,
    method: "POST",
    params: params
  }
}

// 获取列表数据
export const getTableDataParams = (params, data) => {
  return {
    url: `/convergeApi/sourceInfo/queryPage`,
    method: "POST",
    params: params,
    data: data
  }
}

// 获取列表头部
export const getTableHeaderParams = (params) => {
  return {
    url: `/convergeApi/tableHeader`,
    method: "GET",
    params: params
  }
}

// 删除表格数据
export const deleteTableById = (id) => {
  return {
    url: `/convergeApi/sourceInfo/${id}`,
    method: "DELETE",
  }
}

// 列表连接测试
export const tableLinkTest = (id) => {
  return {
    url: `/convergeApi/sourceInfo/connectTestById/${id}`,
    method: "GET"
  }
}

// 新增保存
export const saveSourceList = (params) => {
  return {
    url: `/convergeApi/sourceInfo/save`,
    method: "POST",
    data: params
  }
}

// 新建时的连接测试
export const connectTestAsSave = (params) => {
  return {
    url: `/convergeApi/sourceInfo/connectTestAsSave`,
    method: "POST",
    data: params
  }
}

// 编辑获取单条数据信息
export const getSourceInfo = (id) => {
  return {
    url: `/convergeApi/sourceInfo/${id}`,
    method: "GET",
  }
}

// 编辑后保存
export const updateSource = (params) => {
  return {
    url: `/convergeApi/sourceInfo`,
    method: "PUT",
    data: params
  }
}

// 获取所属系统下拉列表
export const getQuerySystem = (params) => {
  return {
    url: `/convergeApi/sourceInfo/querySystem`,
    method: "POST",
    data: params
  }
}