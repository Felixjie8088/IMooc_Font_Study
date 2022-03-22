// 常量
import {ARROW_CHANGE_LEFT_TYPE, ARROW_CHANGE_RIGHT_TYPE} from './constants'

const arrowObj = {
	Change(slider, type) {
		if (type.toLowerCase() === ARROW_CHANGE_LEFT_TYPE) {
			slider.prev();
		} else if (type.toLowerCase() === ARROW_CHANGE_RIGHT_TYPE) {
			slider.next();
		} else {
			throw new Error('类型传入错误，必须是left、right');
		}
	}
}

export default arrowObj;