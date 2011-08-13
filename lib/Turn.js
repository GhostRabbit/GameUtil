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
            if (this.footprints() == 0) {
                return this.getDieFromCup(scrambler);
            }
            return this.piles[ZombieValue.values.FOOTPRINTS].pickOne();
        };
        this.getDieFromCup = function(scrambler) {
            if (this.cup.isEmpty()) {
                this.overflowBrains += this.brains();
                this.refillCup(scrambler);
            }
            return this.cup.pickOne();

        }
        this.refillCup = function(scrambler) {
            var brains = this.piles[ZombieValue.values.BRAIN].pickAll();
            for (var i = 0; i < brains.length; i++) {
                this.cup.add(brains[i]);
            }
            this.cup.shake(scrambler);
        };
        this.shoot = function() {
            return this.shotguns() >= 3;
        };
        this.stillGoingStrong = function() {
            return !this.itsOver();
        };
        this.count = function(zombieValue) {  
            return this.piles[zombieValue].getCount();
        };
    },
    brains: function() {
        return this.count(ZombieValue.values.BRAIN);
    },
    footprints: function() {
        return this.count(ZombieValue.values.FOOTPRINTS);
    },
    shotguns: function() {
        return this.count(ZombieValue.values.SHOTGUN);
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
        return this.brains() + this.overflowBrains;
    },
    itsOver: function() {
        return this.stopped || this.shoot();
    },
    status: function() {
        return {
            score: this.score(),
            itsOver: this.itsOver(),
            // TODO These should only report colors
            brains: this.piles[ZombieValue.values.BRAIN].list.slice(),
            footprints: this.piles[ZombieValue.values.FOOTPRINTS].list.slice(),
            shotguns: this.piles[ZombieValue.values.SHOTGUN].list.slice()
        };    
    }
});
module.exports = Turn;