import Ember from 'ember';

export default Ember.Component.extend({
  fullName: Ember.computed('question.authorfirst', 'question.authorlast', function() {
    return this.get('question.authorfirst') + " " + this.get('question.authorlast');
  }),
  favoriteQuestions: Ember.inject.service(),

  actions: {
    addToFavs(question) {
      this.get('favoriteQuestions').add(question);
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
