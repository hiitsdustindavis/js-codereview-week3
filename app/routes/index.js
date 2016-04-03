import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.findAll('question');
 },
 actions: {
  addQuestion3(params){
    var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

  }
});
