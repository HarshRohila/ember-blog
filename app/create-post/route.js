import Route from '@ember/routing/route';
import FormModel from '../utils/FormModel';
import { inject as service } from '@ember/service';

export default class CreatePostRoute extends Route {

	@service session;

	beforeModel() {
		if (!this.session.isAuthenticated) {
			this.transitionTo('application');
		}
	}

	model() {
		const newPost = this.store.createRecord('post');
		return new FormModel(newPost);
	}
}
