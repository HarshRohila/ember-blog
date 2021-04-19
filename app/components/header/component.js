import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';

export default class HeaderComponent extends Component {

	@service session;
	@service firebaseApp;

	@action
  logout() {
    return this.session.invalidate();
  }

	@action
  async login() {
    const auth = await this.firebaseApp.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  }
}
