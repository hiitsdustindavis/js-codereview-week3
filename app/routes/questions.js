import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  favoriteQuestions: Ember.inject.service(),
  actions: {
    addAnswer3(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      console.log(newAnswer);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
        // this.transitionTo('questions');
      },
    update(question, params) {
        question.save();
        // this.transitionTo('index');
      // });
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

  }
});
