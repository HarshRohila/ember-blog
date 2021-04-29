import Component from '@glimmer/component';
import { action } from '@ember/object';
import { SessionService } from 'ember-blog/utils/missing-types';
import { inject as service } from '@ember/service';
import PostModel from 'ember-blog/post/model';

export default class PostsListComponent extends Component {

	@service session!: SessionService;

	@action
	onDelete(post: PostModel) {

		const confirmation = this.getConfirmation();
		if (!confirmation) {
			return;
		}

		post.destroyRecord();
	}

	private getConfirmation() {
		return window.confirm('Are you sure you want to delete this post?');
	}
}
