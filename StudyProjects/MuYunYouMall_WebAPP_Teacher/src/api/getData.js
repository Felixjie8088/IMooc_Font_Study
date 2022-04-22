import {ajaxGetJson} from './ajax';
import {RESPONSE_SUCCESS_CODE, TIMEOUTTIME} from './config';

// 获取数据
const getData = (url, options) => {
	return ajaxGetJson(url, {
		timeoutTime: TIMEOUTTIME,
		...options
	}).then(resopnse => {
		if (resopnse.code !== RESPONSE_SUCCESS_CODE) throw new Error(`出错了；${resopnse.code}`);
		return resopnse.data;
	}).catch(err => {
		console.log(err);
	});
}

export default getData;