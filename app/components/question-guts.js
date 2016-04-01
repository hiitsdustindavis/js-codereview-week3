import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      if(confirm('Delete Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
