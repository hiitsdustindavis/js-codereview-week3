import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    update(question, params){
      console.log('question guts here:' + question);
      this.sendAction('update', question, params);
    },
    deleteQuestion(question) {
      if(confirm('Delete Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
