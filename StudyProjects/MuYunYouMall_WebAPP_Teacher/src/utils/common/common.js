const analysisURL = (url, param) => {
	if (!url || url === undefined) return '';
	let url_data = [], url_item_data = [], result = '';
	// 如果参数中带有？需要将问号去除后在split
	if (url.indexOf('?') >= 0) {
		const i = url.indexOf('?');
		url = url.substring(i + 1);
	}
	url_data = url.split('&');
	for (const urlDatum of url_data) {
		let key = urlDatum.split('=')[0];
		let value = urlDatum.split('=')[1];
		url_item_data.push({
			key,
			value
		});
		if (key === param) {
			result = value;
			break;
		}
	}
	return result;
}

export {analysisURL};