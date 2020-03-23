/*
 * @Description: 元模型管理接口
 * @Author: Wenmin He
 * @Date: 2020-01-13 10:28:56
 * @LastEditors: xuqiuting
 * @LastEditTime: 2020-03-06 16:33:42
 */

// 获取元模型树
export const getTreeData = () => {
  return {
    url: `/propertyApi/meta-model-manager/meta-model/tree`,
    method: "GET"
  };
};

// 新增元模型包/组
export const addPkg = params => {
  return {
    url: `/propertyApi/meta-model-manager/meta-model/pkg`,
    method: "POST",
    data: params
  };
};


// 删除元模型
export const deleteMetaModel = id => {
  return {
    url: `/propertyApi/meta-model-manager/meta-model/${id}`,
    method: "DELETE"
  };
};

// 根据字典code获取字典
export const getGroupType = dictCode => {
  return {
    url: `/propertyApi/common/dict/${dictCode}`,
    method: "GET"
  };
};

// 保存元模型
export const saveMetaModel = params => {
  return {
    url: `/propertyApi/meta-model-manager/meta-model`,
    method: "POST",
    data: params
  };
};

// 根据id获取元模型
export const getMetaModel = id => {
  return {
    url: `/propertyApi/meta-model-manager/meta-model/${id}`,
    method: "GET"
  };
};

// 修改元模型
export const editMetaModel = (params)=>{
  return {
    url: `/propertyApi/meta-model-manager/meta-model`,
    method: "PUT",
    data: params
  }
}