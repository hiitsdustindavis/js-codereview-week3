import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answer: DS.attr()
});
