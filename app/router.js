import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions', {path: '/questions/:question_id'});
  this.route('answers', {path: '/answers/:answer_id'});
});

export default Router;
