import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newQuestionFormShow() {
      this.set('addNewQuestion', true);
    },
    addQuestion1() {
      var params = {
        authorfirst: this.get('authorfirst'),
        authorlast: this.get('authorlast'),
        query: this.get('query'),
        notes: this.get('notes'),
      }; console.log(params);
      this.set('addNewQuestion', false);
      this.sendAction('addQuestion2', params);
    }
  }
});
