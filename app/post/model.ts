import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class PostModel extends Model {
	@attr('string') title?: string;
	@attr('string') content?: string;
	@attr('number') createdAtTimestamp?: number;

	@attr('string') userId?: string;

	@computed('createdAt')
	get createdAt() {
		if (!this.createdAtTimestamp) {
			console.error(`Post ${this.id} : timestamp not assigned`);
			return '';
		}

		const date = new Date(this.createdAtTimestamp);
		return date.toLocaleString();
	}
}
