import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { SessionService } from 'ember-blog/utils/missing-types';
import { action } from '@ember/object';

export default class PostComponent extends Component {
	@service session!: SessionService;

	@action onEdit() {
		console.log('test')
	}
}
