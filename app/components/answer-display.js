import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer3(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
        this.transitionTo('index');
    }
  }
});
