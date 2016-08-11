import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('party');
  this.route('member-edit', { path: 'member/:member_id/edit'});
});

export default Router;
