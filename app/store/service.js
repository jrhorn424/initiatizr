import Ember from 'ember';

const Party = Ember.Object.extend({
  members: [],
});

const Member = Ember.Object.extend({
  id: null,
  character: null,
  player: null,
  initiative: null,
});

let orem = Member.create({ id: 1, character: "Orem",   player: "Stephen", initiative: 17 });
let torq = Member.create({ id: 2, character: "Torq",   player: "Matthew", initiative: 20 });
let ket = Member.create({ id: 3, character: "Ket",    player: "Rob",     initiative: 22 });
let trelle = Member.create({ id: 4, character: "Trelle", player: "Adriana", initiative: 17 });
let randus = Member.create({ id: 5, character: "Randus", player: "Brian",   initiative: 6  });

let party = Party.create({
  members: Ember.A([
    orem,
    torq,
    ket,
    trelle,
    randus,
  ]),
});

export default Ember.Service.extend({
  party: party,

  member: Ember.computed.alias('party.members'),

  findAll (model) {
    return this.get(model);
  },

  findRecord (model, id) {
    return this.get(model)[id - 1];
  }
});
