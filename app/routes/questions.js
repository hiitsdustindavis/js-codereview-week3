import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    addAnswer3(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      console.log(params);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
        this.transitionTo('index');
      },
    update(question, params) {
      console.log('wow cool ' + params);
      // debugger;
      // Object.keys(params).forEach(function (key) {
      //   if(params[key]!==undefined) {
      //     question.set(key,params[key]);
      //   }
        question.save();
        this.transitionTo('index');
      // });
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

  }
});
