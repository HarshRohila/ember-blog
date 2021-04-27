import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service, Registry as Services } from '@ember/service';
import { BufferedChangeset } from 'validated-changeset';
import { dropTask } from 'ember-concurrency';
import { taskFor } from 'ember-concurrency-ts';

interface PostFormComponentArgs {
	post: BufferedChangeset;
	onSubmit(): Promise<void>;
	onSubmitComplete?(): void; 
}

export default class PostFormComponent extends Component<PostFormComponentArgs> {

	@service store!: Services['store'];

	@action
	async onSubmit(formEvent: Event) {
		formEvent.preventDefault();
		await taskFor(this.submitTask).perform();
		this.args.onSubmitComplete?.();
	}

	@action
	onContentChange(newContent: string) {
		this.args.post.set('content', newContent);
	}

	@dropTask
	*submitTask() {
		yield this.args.onSubmit();
	}
}
