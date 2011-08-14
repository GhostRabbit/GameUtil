var BackBone = require('backbone');
var Color = require('./Color.js');
var ZombieDie = require('./ZombieDie.js');
var ZombieValue = require('./ZombieValue.js');

var brain = ZombieValue.values.BRAIN;
var footprints = ZombieValue.values.FOOTPRINTS;
var shotgun = ZombieValue.values.SHOTGUN;

var ZombieDieFactory = BackBone.Model.extend({
    redZombieDie: function() {
        return new ZombieDie({
            color: Color.colors.RED,
            sides: [brain, footprints, footprints, shotgun, shotgun, shotgun]
        });
    },
    yellowZombieDie: function() {
        return new ZombieDie({
            color: Color.colors.YELLOW, 
            sides: [brain, brain, footprints, footprints, shotgun, shotgun]
        });
    },
    greenZombieDie: function() {
        return new ZombieDie({
            color: Color.colors.GREEN,
            sides: [brain, brain, brain, footprints, footprints, shotgun]
        });
    }
});
module.exports = ZombieDieFactory;