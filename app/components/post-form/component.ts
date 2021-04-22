import Component from '@glimmer/component';
import { action } from '@ember/object';
import PostModel from 'ember-blog/post/model';
import { dropTask } from 'ember-concurrency';
import { taskFor } from 'ember-concurrency-ts';

interface PostFormComponentArgs {
	post: PostModel;
	onSubmit?(): void;
}

export default class PostFormComponent extends Component<PostFormComponentArgs> {
	@action
	async onSubmit(formEvent: Event) {
		formEvent.preventDefault();
		await taskFor(this.savePost).perform();
		this.args.onSubmit?.();
	}

	@dropTask
	*savePost() {
		yield this.args.post.save();
	}

	@action
	onContentChange(newContent: string) {
		this.args.post.set('content', newContent);
	}
}
