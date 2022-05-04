// sessionStorage工具方法
const sessionStorage = window.sessionStorage;

// 设置
const set = (key, value) => {
	sessionStorage.setItem(key, JSON.stringify(value));
}
// 获取
const get = key => {
	return JSON.parse(sessionStorage.getItem(key));
}
// 删除
const remove = (key) => {
	sessionStorage.removeItem(key);
}
// 清空
const clear = () => {
	sessionStorage.clear();
}

export {set, get, remove, clear}