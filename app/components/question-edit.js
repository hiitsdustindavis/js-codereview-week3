import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    editQuestion(){
      this.set('editQuestion', true);
    },
    update(question) {
      var params = {
        authorfirst: this.get('authorfirst'),
        authorlast: this.get('authorlast'),
        query: this.get('query'),
        notes: this.get('notes'),
      };
      this.set('editQuestion', false);
      this.get('authorfirst', ''),
      this.get('authorlast', ''),
      this.get('query', ''),
      this.get('notes', ''),

      this.sendAction('update', question, params);
    }
  }
});
