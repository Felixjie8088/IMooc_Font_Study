import { CONTENT_TYPE_FROM_URLENCODED, CONTENT_TYPE_JSON, HTTP_GET } from "./constants.js";
import DEFAULTS from './default.js';
import { addURLData, serialize, serializeJSON } from './utils.js';

class Ajax {
  constructor(url, options) {
    this.url = url;
    this.options = Object.assign({}, DEFAULTS, options);
    this.init();
  }

  // 初始化
  init() {
    // 发送Ajax请求
    const xhr = new XMLHttpRequest();
    this.xhr = xhr;
    // 绑定响应事件处理程序
    this.bindEvents();

    xhr.open(this.options.method, this.url + this.addParam(), true);
    // 设置responseType
    this.setResponseType();
    // 设置跨域是否携带cookie
    this.setWithCredentials();
    // 设置超时时间
    this.setTimeOutTime();
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.send(JSON.stringify(send_data));
    // 发送请求
    this.sendData();

  }

  // 绑定响应事件处理程序
  bindEvents() {
    const xhr = this.xhr;
    const { success, httpCodeError, error, abort, timeout } = this.options
    // 加载事件
    xhr.addEventListener(
      "load",
      () => {
        if (this.ok()) {
          success(xhr.response, xhr);
        } else {
          httpCodeError(xhr.status, xhr);
        }
      },
      false
    );

    // 请求error事件
    xhr.addEventListener(
      "error",
      () => {
        error(xhr);
      },
      false
    );

    // 取消请求事件
    xhr.addEventListener(
      "abort",
      () => {
        abort(xhr);
      },
      false
    );

    // 取消请求事件
    xhr.addEventListener(
      "timeout",
      () => {
        timeout(xhr);
      },
      false
    );
  }

  ok() {
    const xhr = this.xhr;
    return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
  }

  // url追加参数
  addParam() {
    const { params } = this.options;
    if (!params) return '';
    return addURLData(this.url, serialize(params));
  }

  // 设置responseType
  setResponseType() {
    const xhr = this.xhr;
    xhr.responseType = this.options.responseType;
  }

  // 设置跨域是否携带cookie
  setWithCredentials() {
    const xhr = this.xhr;
    if (this.options.withCredentials)
      xhr.withCredentials = this.options.withCredentials;
  }

  // 设置超时时间
  setTimeOutTime() {
    const xhr = this.xhr;
    if (this.options.timeoutTime > 0)
      xhr.timeout = this.options.timeoutTime;
  }
  // 设置ContentType
  setContentType(Type = this.options.contentType) {
    const xhr = this.xhr;
    if (!Type) return;
    xhr.setRequestHeader("Content-Type", Type);
  }

  // 发送请求
  sendData() {
    const xhr = this.xhr;
    const { data } = this.options;
    if (!this.isSendData()) {
      return xhr.send(null);
    }

    // 最终发送的数据
    let resultData = null;
    // 发送FormData格式的数据
    if (this.isFormData()) {
      resultData = data;
    } else if (this.idFormURLEncodeData()) {
      // 发送application/x-www-form-urlencoded格式的数据
      // 设置ContentType
      this.setContentType(CONTENT_TYPE_FROM_URLENCODED);
      resultData = serialize(data);
    } else if (this.idJSONData()) {
      // 发送application/json格式的数据
      // 设置ContentType
      this.setContentType(CONTENT_TYPE_JSON);
      resultData = serializeJSON(data);
    } else {
      // 设置ContentType
      this.setContentType();
      resultData = data;
    }
    xhr.send(resultData);
  }

  // 是否需要使用send发送数据
  isSendData() {
    const { data, method } = this.options;
    if (!data || method.toUpperCase() === HTTP_GET) return false;
    return true;
  }

  // 发送FormData格式的数据
  isFormData() {
    // 判断是否是FormData的实例  因为如果是FormData数据的话  是 new FormData()实例出来的
    return this.options.data instanceof FormData;
  }
  // 发送application/x-www-form-urlencoded格式的数据
  idFormURLEncodeData() {
    return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FROM_URLENCODED);
  }
  // 发送application/json格式的数据
  idJSONData() {
    return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON);
  }

  // 获取XHR对象
  getXHR() {
    return this.xhr;
  }
}

export default Ajax;