import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PostsListComponent extends Component {
	@action
	onDelete(post) {
		post.destroyRecord();
	}
}
