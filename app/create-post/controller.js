import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CreatePostController extends Controller {
	@action
	onCreatePost() {
		this.transitionToRoute('index');
	}
}
