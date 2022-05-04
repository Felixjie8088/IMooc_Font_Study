// css
import './header.css';

// scroll
import Scroll from "utils/scroll";

const CHANGED_CLASS_NAME = 'header-transition';

class Header extends Scroll {
	constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {
		super({
			critical_point,
			change: () => {
				this.el.classList.add(CHANGED_CLASS_NAME);
			},
			reset: () => {
				this.el.classList.remove(CHANGED_CLASS_NAME);
			},
		}, scrollContainer, eventEl, el);
	}
}

export default Header;