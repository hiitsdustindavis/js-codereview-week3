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
        question: this.get('question'),
        notes: this.get('notes')
      };
      this.set('addNewQuestion', false),
      this.sendAction('addQuestion2', params);
    }
  }
});
