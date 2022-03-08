import { CONTENT_TYPE_FROM_URLENCODED, HTTP_GET } from "./constants.js";

const DEFAULTS = {
  method: HTTP_GET,
  // 请求头携带的数据
  params: null,
  // 请求体携带的数据
  data: null,
  contentType: CONTENT_TYPE_FROM_URLENCODED,
  responseType: "",
  timeoutTime: 0,
  // 是否需要携带Cookie数据
  withCredentials: false,

  // 方法
  success() { },
  httpCodeError() { },
  error() { },
  abort() { },
  timeout() { }
};

export default DEFAULTS;