import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SpinnerModal extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @tracked isLoading = false;

  async load(asyncFunc: () => Promise<any>) {
    this.isLoading = true;
    
    try {
      await asyncFunc();
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      this.isLoading = false;
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'spinner-modal': SpinnerModal;
  }
}
