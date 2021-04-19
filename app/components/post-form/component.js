import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PostFormComponent extends Component {
	@action
	onSubmit(formEvent) {
		formEvent.preventDefault();
		this.args.post.save();
		this.args.onSubmit?.();
	}
}
