var BackBone = require('backbone');
var Color = require('./Color.js');
var ZombieDie = require('./ZombieDie.js');
var ZombieValue = require('./ZombieValue.js');
var ZombieDieFactory = BackBone.Model.extend({
    initialize: function() {
        this.getRedZombieSides = function() {
            var B = ZombieValue.values.BRAIN;
            var z = ZombieValue;
            return [B, z.values.FOOTPRINTS, z.values.FOOTPRINTS, z.values.SHOOTGUN, z.values.SHOOTGUN, z.values.SHOOTGUN];
        };
        this.getYellowZombieSides = function() {
            var z = ZombieValue;
            return [z.values.BRAIN, z.values.BRAIN, z.values.FOOTPRINTS, z.values.FOOTPRINTS, z.values.SHOOTGUN, z.values.SHOOTGUN];
        };
        this.getGreenZombieSides = function() {
            var z = ZombieValue;
            return [z.values.BRAIN, z.values.BRAIN, z.values.BRAIN, z.values.FOOTPRINTS, z.values.FOOTPRINTS, z.values.SHOOTGUN];
        };
    },
    redZombieDie: function() {
        return new ZombieDie({
            color: Color.colors.RED,
            sides: this.getRedZombieSides()
        });
    },
    yellowZombieDie: function() {
        return new ZombieDie({
            color: Color.colors.YELLOW,
            sides: this.getYellowZombieSides()
        });
    },
    greenZombieDie: function() {
        return new ZombieDie({
            color: Color.colors.GREEN,
            sides: this.getGreenZombieSides()
        });
    }
});
module.exports = ZombieDieFactory;