import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    editQuestion(){
      this.set('editQuestion', true);
    },
    update(question) {
      var params = {
        query: this.get('query'),
        author: this.get('author'),
        notes: this.get('notes'),
        answer: this.get('answer')
      };

      this.set('editQuestion', false);


      this.sendAction('update', question, params);
    }
  }
});
