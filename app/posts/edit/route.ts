import { Router } from '@ember/routing';
import Route from '@ember/routing/route';
import FormModel from 'ember-blog/utils/FormModel';
import { inject as service } from '@ember/service';

export default class PostsPostEdit extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here

  @service router!: Router;

  async model({ post_id }: { post_id: string }) {
    const post = await this.store.findRecord('post', post_id);
    return new FormModel(post);
  }
}
