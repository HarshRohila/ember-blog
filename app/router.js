import EmberRouter from '@ember/routing/router';
import config from 'ember-blog/config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route('create-post');
	this.route('post', { path: '/posts/:post_id' });
});
