var BackBone = require('backbone');
var ZombieValue = require('./ZombieValue.js');
var Turn = BackBone.Model.extend({
    initialize: function(options) {
        this.cup = options.cup;
        this.piles = options.piles;
        this.overflowBrains = 0;
        this.stopped = false;
        this.getHandOfDice = function(scrambler) {
            var hand = new Array(3);
            for (var i = 0; i < hand.length; i++) {
                hand[i] = this.getDie(scrambler);
            }
            return hand;
        };
        this.getDie = function(scrambler) {
            if (this.cup.isEmpty()) {
                this.overflowBrains += this.count(ZombieValue.values.BRAIN);
                this.refillCup(scrambler);
            }
            return this.cup.pickOne();
        };
        this.refillCup = function(scrambler) {
            var brains = this.piles[ZombieValue.values.BRAIN].pickAll();
            for (var i = 0; i < brains.length; i++) {
                this.cup.add(brains[i]);
            }
            this.cup.shake(scrambler);
        };
        this.shoot = function() {
            return this.count(ZombieValue.values.SHOOTGUN) >= 3;
        };
        this.stillGoingStrong = function() {
            return !this.itsOver();
        };
    },
    count: function(zombieValue) {
        return this.piles[zombieValue].getCount();
    },
    keepGoing: function(scrambler) {
        if (this.stillGoingStrong()) {
            var handOfDice = this.getHandOfDice(scrambler);
            for (var i = 0; i < handOfDice.length; i++) {
                var die = handOfDice[i];
                die.roll(scrambler);
                this.piles[die.getResult()].add(die);
            }
        }
    },
    score: function() {
        if (this.shoot()) {
            return 0;
        }
        return this.count(ZombieValue.values.BRAIN) + this.overflowBrains;
    },
    itsOver: function() {
        return this.stopped || this.shoot();
    }
});
module.exports = Turn;