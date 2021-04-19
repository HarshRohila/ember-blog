import Route from '@ember/routing/route';
import { Changeset } from 'ember-changeset';
export default class CreatePostRoute extends Route {
	model() {
		const newPost = this.store.createRecord('post');
		const changeset = Changeset(newPost)
		return changeset;
	}
}
