import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['party-list'],
  sortedParty: Ember.computed.sort('party', 'sortDefinition'),
  sortDefinition: ['initiative:desc'],
});
