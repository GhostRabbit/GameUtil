var BackBone = require('backbone');
var ZombieDicePool = require('./ZombieDicePool.js');
var RandomScrambler = require('./RandomScrambler.js');
var Turn = require ('./Turn.js');
var ZombieValue = require('./ZombieValue.js');
var Pool = require('./Pool.js');

var TurnFactory = BackBone.Model.extend({
    initialize: function() {
        this.createPiles = function() {
            var piles = new Array(Object.keys(ZombieValue.values).length);
            for (var i = 0; i < piles.length; i++) {
                piles[i] = new Pool();
            }
            return piles;
        };
    },
    createTurn: function() {
        var cup = new ZombieDicePool();
        cup.shake(new RandomScrambler());
        return new Turn({cup:cup, piles:this.createPiles()});
    }
});

module.exports = TurnFactory;
