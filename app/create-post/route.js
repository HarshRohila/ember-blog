import Route from '@ember/routing/route';
import FormModel from '../utils/FormModel';
import { inject as service } from '@ember/service';
import PostModel from 'ember-blog/post/model';

export default class CreatePostRoute extends Route {

	@service session;

	beforeModel() {
		if (!this.session.isAuthenticated) {
			this.transitionTo('application');
		}
	}

	model() {
		const newPost = this.getNewPost();
		const formModel = new FormModel(newPost);

		return formModel;
	}

	getNewPost() {
		return {
			title: '',
			content: '',
			createdAtTimestamp: undefined
		};
	}
}
