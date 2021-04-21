import Component from '@glimmer/component';
import { action } from '@ember/object';
import { SessionService } from 'ember-blog/utils/missing-types';
import { inject as service } from '@ember/service';
import PostModel from 'ember-blog/post/model';

export default class PostsListComponent extends Component {

	@service session!: SessionService;

	@action
	onDelete(post: PostModel) {
		post.destroyRecord();
	}
}
