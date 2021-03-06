import EmberRouter from '@ember/routing/router';
import config from 'ember-blog/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('create-post');
  this.route('posts', function () {
    this.route('post', { path: '/:post_id' });
    this.route('edit', { path: '/:post_id/edit' });
  });
});
