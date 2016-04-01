import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    editQuestion(){
      this.set('editQuestion', true);
    },
    update(question) {
      var params = {
        question: this.get('question'),
        author: this.get('author')
      };
      this.set('editQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
