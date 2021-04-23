import Component from '@glimmer/component';
import { action } from '@ember/object';
import { dropTask } from 'ember-concurrency';
import { taskFor } from 'ember-concurrency-ts';
import { inject as service, Registry as Services } from '@ember/service';
import { BufferedChangeset } from 'validated-changeset';

interface PostFormComponentArgs {
	post: BufferedChangeset;
	onSubmit?(): void;
}

export default class PostFormComponent extends Component<PostFormComponentArgs> {

	@service store!: Services['store'];

	@action
	async onSubmit(formEvent: Event) {
		formEvent.preventDefault();

		this.addTimestampToPost(this.args.post);

		await taskFor(this.savePost).perform();

		this.args.onSubmit?.();
	}

	private addTimestampToPost(post: BufferedChangeset) {
		post.set('createdAtTimestamp', new Date().getTime());
	}

	@dropTask
	*savePost() {
		this.args.post.execute();
		const post = this.store.createRecord('post', this.args.post.data);
		yield post.save();
	}

	@action
	onContentChange(newContent: string) {
		this.args.post.set('content', newContent);
	}
}
