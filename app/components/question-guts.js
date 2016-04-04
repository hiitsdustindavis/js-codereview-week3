import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    update(question, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      
      this.sendAction('update', question, params);
    },
    deleteQuestion(question) {
      if(confirm('Delete Question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
