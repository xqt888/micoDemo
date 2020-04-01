import { useReducer } from "react";
import axios from "axios";
import { Message } from "@alifd/next";

// Set baseURL when debugging production url in dev mode
axios.defaults.baseURL = window.location.protocol + "//" + window.location.host;
axios.defaults.withCredentials = true; // 跨域设置
axios.defaults.headers.get["X-Requested-With"] = "XMLHttpRequest"; // Ajax get请求标识
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest"; // Ajax post请求标识
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=utf-8"; // POST请求参数获取不到的问题
axios.defaults.headers.put["Content-Type"] =
  "application/x-www-form-urlencoded;charset=utf-8"; // Put请求参数获取不到的问题
axios.defaults.headers.put["X-Requested-With"] = "XMLHttpRequest"; // Ajax put请求标识
axios.defaults.headers.delete["X-Requested-With"] = "XMLHttpRequest"; // Ajax delete请求标识

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log("#######",error)
    if (error.response != null) {
      if (error.response.status == 302) {
        Message.error(error.response.statusText);
      }else if( error.response.status == 401 ){
       
      } else if (
        error.response.status == 400 ||
        error.response.status == 404 ||
        error.response.status == 405 ||
        error.response.status == 500 ||
        error.response.status == 504
      ) {
        if (!error.response.data || typeof error.response.data !== "object") {
          error.response.data = {
            data: {},
          };
        }
        return error.response;
      }
    }
  },
);

axios.interceptors.request.use(function(config) {
  const user = JSON.parse(window.sessionStorage.getItem("userLogin")) || {};
  const token = window.sessionStorage.getItem("token");
  config.headers["X-Access-Token"] = token;

  //   config.headers.get["loginUserId"] = user.userId || "admin";
  //   config.headers.post["loginUserId"] = user.userId || "admin";
  //   config.headers.get["loginUserOrgId"] = user.orgId || "1";
  //   config.headers.post["loginUserOrgId"] = user.orgId || "1";
  // }
  return config;
});

/**
 * Method to make ajax request
 *
 * @param {object} options - axios config (https://github.com/axios/axios#request-config)
 * @return {object} response data
 */
export async function request(options) {
  try {
    const response = await axios(options);
    const { data, error } = handleResponse(response);
    if (error) {
      showError(error.msg);
      throw error;
    } else {
      return { ...data };
    }
  } catch (error) {
    showError(error.msg);
    throw error;
  }
}

/**
 * Hooks to make ajax request
 *
 * @param {object} options - axios config (https://github.com/axios/axios#request-config)
 * @return {object}
 *   @param {object} response - response of axios (https://github.com/axios/axios#response-schema)
 *   @param {object} error - HTTP or use defined error
 *   @param {boolean} loading - loading status of the request
 *   @param {function} request - function to make the request manually
 */
export function useRequest(options) {
  const initialState = {
    response: null,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(requestReducer, initialState);

  /**
   * Method to make request manually
   * @param {object} config - axios config to shallow merged with options before making request
   */
  async function request(config) {
    try {
      dispatch({
        type: "init",
      });

      const response = await axios({
        ...options,
        ...config,
      });

      const { data, error } = handleResponse(response);

      if (error) {
        throw error;
      } else {
        dispatch({
          type: "success",
          response,
        });
        return { response, data };
      }
    } catch (error) {
      showError(error.message);
      dispatch({
        type: "error",
        error,
      });
      throw error;
    }
  }

  return {
    ...state,
    request,
  };
}

/**
 * Reducer to handle the status of the request
 * @param {object} state - original status
 * @param {object} action - action of dispatch
 * @return {object} new status
 */
function requestReducer(state, action) {
  switch (action.type) {
    case "init":
      return {
        response: null,
        error: null,
        loading: true,
      };
    case "success":
      return {
        response: action.response,
        error: null,
        loading: false,
      };
    case "error":
      return {
        response: null,
        error: action.error,
        loading: false,
      };
    default:
      return {
        response: null,
        error: null,
        loading: false,
      };
  }
}

/**
 * Custom response data handler logic
 *
 * @param {object} response - response data returned by request
 * @return {object} data or error according to status code
 */
function handleResponse(response) {
  // console.log(response, "response");
  if (!response) {
    const errormsg = new Error("后端接口异常");
    return { errormsg };
  } else {
    let { data } = response;
    // console.log(data,typeof(data),"data")
    // if(typeof(data)=='string'){
    //   console.log(typeof(data),"%%%")
    //   try {
    //     data = JSON.parse(data);
    //     console.log(data,"%%%")
    //   } catch (error) {
    //     console.log(error,data,"error")
    //     data={};
    //   }
    // }
    // console.log(data,"data111")
    // Please modify the status key according to your business logic
    // normally the key is `status` or `code`
    if (data && data.code == 200) {
      return { data };
    } else if (data && data.code) {
      Message.error(data.msg);
      return { data };
    } else {
      const errormsg = new Error((data && data.msg) || "后端接口异常");
      return { errormsg };
    }
  }
}

/**
 * Display error message
 *
 * @param {string} errorMessage - error message
 */
function showError(errorMessage) {
  Message.show({
    type: "error",
    title: "错误消息",
    content: errorMessage,
  });
}
