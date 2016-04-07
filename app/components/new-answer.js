import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    newAnswerFormShow() {
      this.set('addNewAnswer', true);
    },
    addAnswer1() {
      var params = {
        answerInput: this.get('answerInput'),
        answerAuthor: this.get('answerAuthor'),
        question: this.get('question')
      };
      // console.log(params);
      this.set('addNewAnswer', false);
      this.sendAction('addAnswer2', params);
    }
  }
});
