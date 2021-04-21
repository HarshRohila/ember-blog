import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import  SpinnerModalService from 'ember-blog/spinner-modal/service';

interface SpinnerModalArgs {}

export default class SpinnerModal extends Component<SpinnerModalArgs> {
	@service spinnerModal!: SpinnerModalService;
}
