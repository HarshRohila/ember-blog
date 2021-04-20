import Component from '@glimmer/component';
import { action } from '@ember/object';
import { toString } from 'ember-froala-editor/helpers/to-string';

export default class EditorComponent extends Component {
	@action
	onChangeContent(newContent) {
		newContent = toString(newContent);
		this.args.onChange?.(newContent);
	}
}
