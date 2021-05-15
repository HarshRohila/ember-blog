import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';
import FirebaseAppService from 'emberfire/services/firebase-app';
import { NotificationsService, SessionService } from 'ember-blog/utils/missing-types';
import SpinnerModal from 'ember-blog/spinner-modal/service';

export default class HeaderComponent extends Component {

  @service session!: SessionService;
  @service firebaseApp!: FirebaseAppService;
  @service spinnerModal!: SpinnerModal;
  @service notifications!: NotificationsService;

  @action
  logout() {
    return this.session.invalidate();
  }

  @action
  async login() {
    try {
      await this.spinnerModal.load(this.loginWithGoogle.bind(this));
      this.notifications.success('Login Successful');
    } catch (error) {
      this.notifications.error('Login Failed');
    }
  }

  private async loginWithGoogle() {
    const auth = await this.firebaseApp.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  }
}
