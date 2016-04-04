import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answer: DS.hasMany('answer', {async: true})
});
