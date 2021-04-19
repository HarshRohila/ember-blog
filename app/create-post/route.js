import Route from '@ember/routing/route';
import FormModel from '../utils/FormModel';
export default class CreatePostRoute extends Route {
	model() {
		const newPost = this.store.createRecord('post');
		return new FormModel(newPost);
	}
}
