import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
	@action
	createPost() {
		return this.store
      .createRecord('post', {
        title: 'EmberFire is flaming hot!',
        content: 'You can store and sync data in realtime without a backend.',
      })
      .save();
	}
}
