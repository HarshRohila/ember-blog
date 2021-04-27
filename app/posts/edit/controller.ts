import Controller from '@ember/controller';
import { action } from '@ember/object';
import { Router } from '@ember/routing';
import { inject as service } from '@ember/service';
import { addTimestampToPost } from 'ember-blog/utils/post';

export default class PostsPostEdit extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @service router!: Router;

  @action async onEditPost() {
    const post = this.model;
    addTimestampToPost(post);
    post.execute();

    await post.save();
  }

  @action onEditFinished() {
    this.router.transitionTo('posts.post', this.model.id);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'posts/post/edit': PostsPostEdit;
  }
}
