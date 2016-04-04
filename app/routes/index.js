import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      question: this.store.findAll('question'),
      answer: this.store.findAll('answer')
    });
 },
 actions: {
  addQuestion3(params){
    var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

  }
});
