import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer2(params) {
      this.sendAction('addAnswer1', params);
    }
  }
});
