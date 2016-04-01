import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params){
      this.sendAction('update', question, params);
    },
    deleteQuestion(question) {
      if(confirm('Delete Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
