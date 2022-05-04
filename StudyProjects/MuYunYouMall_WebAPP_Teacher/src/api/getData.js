import {ajaxGetJson} from './ajax';
import {RESPONSE_SUCCESS_CODE, TIMEOUTTIME} from './config';

// 获取数据
const getData = (url, options) => {
	const ajaxPromise = ajaxGetJson(url, {
		timeoutTime: TIMEOUTTIME,
		...options
	});
	
	const resultPromise = ajaxPromise.then(response => {
		if (response.code !== RESPONSE_SUCCESS_CODE) throw new Error(`出错了；${response.code}`);
		return response.data;
	}).catch(err => {
		console.log(err);
	});
	
	resultPromise.xhr = ajaxPromise.xhr;
	return resultPromise;
}

// 延时
const delay = ms => {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
};

// 延迟获取数据
const getDelayData = (url, options) => {
	return delay(1000).then(() => {
		return getData(url, options);
	});
}

export {getData, getDelayData};