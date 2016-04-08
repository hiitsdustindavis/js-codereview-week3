import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    this.get('questions').pushObject(question);
  },
  favCount: Ember.computed('questions.[]', function(){
    return this.get('questions.length');
  })
});
