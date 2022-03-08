// 工具函数

// 数据序列化成urlencoded格式字符串
const serialize = param => {
  if (!param) return '';
  const results = [];
  for (let [key, value] of Object.entries(param)) {
    results.push(`${encodeURIComponent(key)} = ${encodeURIComponent(value)}`);
  }
  results.join('&');
  return results;
}

// 数据序列化成json格式的数据
const serializeJSON = param => {
  if (!param) return '';
  return JSON.stringify(param);
}

// 给URL添加参数
const addURLData = (url, data) => {
  if (!data) return '';
  let mark = '';
  mark = url.includes('?') ? '&' : '?'
  return mark + data;
}

export { serialize, addURLData };

