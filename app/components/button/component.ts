import Component from '@glimmer/component';

interface ButtonArgs {
	iconSpin: boolean;
}

export default class Button extends Component<ButtonArgs> {
	get iconSpin() {
		return this.args.iconSpin || false;
	}
}
