import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['party-list__member'],

  editable: false,

  actions: {
    edit () {
      this.toggleProperty('editable');
    },

    save () {
      this.toggleProperty('editable');
    },
  },
});
