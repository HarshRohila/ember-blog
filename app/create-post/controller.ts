import Controller from '@ember/controller';
import { action } from '@ember/object';
import { Router } from '@ember/routing';
import { inject as service } from '@ember/service';
import { SessionService } from 'ember-blog/utils/missing-types';
import { addTimestampToPost } from 'ember-blog/utils/post';
import { BufferedChangeset } from 'validated-changeset';

export default class CreatePostController extends Controller {

	@service router!: Router;
	@service session!: SessionService;

	@action
	async onCreatePost() {
		await this.savePost(this.model);
	}

	@action onCreateFinished() {
		this.router.transitionTo('index');
	}

	async savePost(post: BufferedChangeset) {
		addTimestampToPost(post);
		this.addUserIdToPost(post);
		post.execute();

		const newPost = this.store.createRecord('post', post.data);
		await newPost.save();
	}

	private addUserIdToPost(post: BufferedChangeset) {
		const userId = this.session.data.authenticated.user.uid;
		console.log(userId);
		post.set('userId', userId);
	}
}
