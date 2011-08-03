var BackBone = require('backbone');
var Color = require('./Color.js');
var ZombieDie = require('./ZombieDie.js');
var ZombieValue = require('./ZombieValue.js');

var brain = ZombieValue.values.BRAIN;
var footprints = ZombieValue.values.FOOTPRINTS;
var shootgun = ZombieValue.values.SHOOTGUN;

var ZombieDieFactory = BackBone.Model.extend({
    redZombieDie: function() {
        return new ZombieDie({
            color: Color.colors.RED,
            sides: [brain, footprints, footprints, shootgun, shootgun, shootgun]
        });
    },
    yellowZombieDie: function() {
        return new ZombieDie({
            color: Color.colors.YELLOW,
            sides: [brain, brain, footprints, footprints, shootgun, shootgun]
        });
    },
    greenZombieDie: function() {
        return new ZombieDie({
            color: Color.colors.GREEN,
            sides: [brain, brain, brain, footprints, footprints, shootgun]
        });
    }
});
module.exports = ZombieDieFactory;