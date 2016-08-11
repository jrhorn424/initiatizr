import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('member', params.member_id);
  },

  actions: {
    save (member) {
      this.transitionTo('party');
    },
  },
});
