import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['party-list'],
  sortedParty: Ember.computed.sort('party.members', 'sortDefinition'),
  sortDefinition: ['initiative:desc'],
});
