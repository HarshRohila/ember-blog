import Controller from '@ember/controller';
import { action } from '@ember/object';
import { Router } from '@ember/routing';
import { inject as service } from '@ember/service';
import { addTimestampToPost } from 'ember-blog/utils/post';
import { BufferedChangeset } from 'validated-changeset';

export default class CreatePostController extends Controller {

	@service router!: Router;

	@action
	async onCreatePost() {
		await this.savePost(this.model);
	}

	@action onCreateFinished() {
		this.router.transitionTo('index');
	}

	async savePost(post: BufferedChangeset) {
		addTimestampToPost(post);
		post.execute();

		const newPost = this.store.createRecord('post', post.data);
		await newPost.save();
	}
}
