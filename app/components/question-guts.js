import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('question.authorfirst', 'question.authorlast', function() {
    return this.get('question.authorfirst') + " " + this.get('question.authorlast');
  }),
  favoriteQuestion: Ember.inject.service(),

  actions: {
    addFavQuestion(question) {
      this.get('favoriteQuestion').add(question);
    },
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
