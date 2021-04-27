import Controller from '@ember/controller';
import { action } from '@ember/object';
import { Router } from '@ember/routing';
import { inject as service } from '@ember/service';
import { BufferedChangeset } from 'validated-changeset';

export default class CreatePostController extends Controller {

	@service router!: Router;

	@action
	async onCreatePost() {
		await this.savePost();
	}

	@action onCreateFinished() {
		this.router.transitionTo('index');
	}

	private addTimestampToPost(post: BufferedChangeset) {
		post.set('createdAtTimestamp', new Date().getTime());
	}

	async savePost() {
		const post = this.model;
		this.addTimestampToPost(post);
		post.execute();

		const newPost = this.store.createRecord('post', post.data);
		await newPost.save();
	}
}
