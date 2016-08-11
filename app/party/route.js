import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      { character: "Orem",   player: "Stephen", initiative: 17 },
      { character: "Torq",   player: "Matthew", initiative: 20 },
      { character: "Ket",    player: "Rob",     initiative: 22 },
      { character: "Trelle", player: "Adriana", initiative: 17 },
      { character: "Randus", player: "Brian",   initiative: 6  },
    ];
  },
});
