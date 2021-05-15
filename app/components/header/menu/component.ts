import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface HeaderMenuArgs { }

export default class HeaderMenu extends Component<HeaderMenuArgs> {
	@tracked showMenu = false;

	@action toggleMenu() {
		this.showMenu = !this.showMenu;
	}

	@action closeMenu() {
		this.showMenu = false;
	}
}
