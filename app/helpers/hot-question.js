import Ember from 'ember';

export function hotQuestion(params) {
  var question = params[0];

 if(question.get('answers').get('length') >= 3) {
   return Ember.String.htmlSafe('<p>&#x029DA;</p>');
 }
}

export default Ember.Helper.helper(hotQuestion);
