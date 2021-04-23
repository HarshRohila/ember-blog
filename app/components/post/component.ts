import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { SessionService } from 'ember-blog/utils/missing-types';

export default class PostComponent extends Component {
	@service session!: SessionService;
}
