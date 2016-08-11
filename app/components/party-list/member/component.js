import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['party-list__member'],

  actions: {
    edit () {
      this.sendAction('edit', this.get('member'));
    }
  },
});
