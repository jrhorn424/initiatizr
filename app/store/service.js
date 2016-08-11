import Ember from 'ember';

export default Ember.Service.extend({
  party: [
    { id: 1, character: "Orem",   player: "Stephen", initiative: 17 },
    { id: 2, character: "Torq",   player: "Matthew", initiative: 20 },
    { id: 3, character: "Ket",    player: "Rob",     initiative: 22 },
    { id: 4, character: "Trelle", player: "Adriana", initiative: 17 },
    { id: 5, character: "Randus", player: "Brian",   initiative: 6  },
  ],

  member: Ember.computed.alias('party'),

  findAll (model) {
    return this.get(model);
  },

  findRecord (model, id) {
    return this.get(model)[id - 1];
  }
});
