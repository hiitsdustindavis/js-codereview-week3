import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions', {path: '/questions/:question_id'});
  //this path is breakin something. Questions route is undefined and cannot be linked to.
});

export default Router;
