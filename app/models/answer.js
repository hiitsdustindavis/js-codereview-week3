import DS from 'ember-data';

export default DS.Model.extend({
  answerAuthor: DS.attr(),
  answerInput: DS.belongsTo('question', {async: true})
});
