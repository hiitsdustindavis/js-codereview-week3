import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newQuestionFormShow() {
      this.set('addNewQuestion', true);
    },
    addQuestion1() {
      var params = {
        author: this.get('author'),
        query: this.get('query'),
        notes: this.get('notes'),
        answer: this.get('answer')
      };
      this.set('addNewQuestion', false);
      this.sendAction('addQuestion2', params);
    }
  }
});
