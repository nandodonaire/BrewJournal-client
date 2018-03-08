import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  // this.route('users');
  // this.route('breweries', function() {
  //   this.route('add-brewery');
  // });
  this.route('breweries');
  this.route('add-brewery');
  this.route('brewery', {path: '/breweries/:brewery_id'}, function() {
    this.route('edit-brewery');
  });
});

export default Router;
