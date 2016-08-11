import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('party');
  },

  actions: {
    editMember (member) {
      this.transitionTo('member-edit', member);
    },
  },
});
