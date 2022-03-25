import {ajaxGetJson} from './ajax';
import {RESPONSE_SUCCESS_CODE, TIMEOUTTIME} from './config';

// 获取数据
const getData = (url, options) => {
	return ajaxGetJson(url, {
		timeoutTime: TIMEOUTTIME,
		...options
	}).then(res => {
		if (res.code !== RESPONSE_SUCCESS_CODE) throw new Error(`Error: ${res.code}`);
		return res.data;
	}).catch(err => {
		console.log(err);
	});
}

export default getData;