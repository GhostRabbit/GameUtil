var assert = require('assert');
var Turn = require('../lib/Turn.js');
var TurnFactory = require('../lib/TurnFactory.js');
var ZombieValue = require('../lib/ZombieValue.js');
var FixedScrambler = require('./FixedScrambler.js');

var turn;
var onlyBrainScrambler;
var onlyFootprintScrambler;
var onlyShotgunScrambler;
module.exports = {
    'setup': function() {
        turn = new TurnFactory().createTurn();
        onlyBrainScrambler = new FixedScrambler({
            value: 0
        });
        onlyFootprintScrambler = new FixedScrambler({
            value: 2 // Only works for red and yellow dice (The first 7 dice in the cup if the cup is not scrambled)
        });

        onlyShotgunScrambler = new FixedScrambler({
            value: 5
        });
    },
    'initial state of Turn': function() {
        assert.equal(turn.score(), 0);
        assert.equal(turn.brains(), 0);
        assert.equal(turn.footprints(), 0);
        assert.equal(turn.shotguns(), 0);
        
        var status = turn.status();
        assert.equal(status.score, 0);
        assert.equal(status.itsOver, false);
        assert.equal(turn.brains.length, 0);
        assert.equal(turn.footprints.length, 0);
        assert.equal(turn.shotguns.length, 0);
    },
    'Score after one good roll': function() {
        turn.keepGoing(onlyBrainScrambler);
        assert.equal(turn.brains(), 3);
        assert.equal(turn.score(), 3);
        
        var status = turn.status();
        assert.equal(status.score, 3);
        assert.equal(status.itsOver, false);
        assert.equal(status.brains.length, 3);
        assert.equal(status.footprints.length, 0);
        assert.equal(status.shotguns.length, 0);
    },
    'Score when dead': function() {
        turn.keepGoing(onlyBrainScrambler);
        assert.equal(turn.score(), 3);
        turn.keepGoing(onlyShotgunScrambler);
        assert.ok(turn.itsOver());
        assert.equal(turn.score(), 0);
        
        var status = turn.status();
        assert.equal(status.score, 0);
        assert.equal(status.itsOver, true);
        assert.equal(status.brains.length, 3);
        assert.equal(status.footprints.length, 0);
        assert.equal(status.shotguns.length, 3);
    },
    'Footprints should be used when rolling': function() {
        turn = new TurnFactory().createTurn(new FixedScrambler({value: 100})); // Do not scramble the cup please.
        turn.keepGoing(onlyFootprintScrambler);
        assert.equal(turn.cup.list.length, 10);
        assert.equal(turn.footprints(), 3);
        turn.keepGoing(onlyBrainScrambler);
        assert.equal(turn.cup.list.length, 10); 
        assert.equal(turn.footprints(), 0);
    },
    'Many good rolls should use brain overflow counter': function() {
        assertBrainsAndScore(turn, 0, 0);
        turn.keepGoing(onlyBrainScrambler);
        assertBrainsAndScore(turn, 3, 3);
        turn.keepGoing(onlyBrainScrambler);
        assertBrainsAndScore(turn, 6, 6);
        turn.keepGoing(onlyBrainScrambler);
        assertBrainsAndScore(turn, 9, 9);
        turn.keepGoing(onlyBrainScrambler);
        assertBrainsAndScore(turn, 12, 12);
        // First overflow
        turn.keepGoing(onlyBrainScrambler);
        assertBrainsAndScore(turn, 3, 15);
        turn.keepGoing(onlyBrainScrambler);
        assertBrainsAndScore(turn, 6, 18);
        turn.keepGoing(onlyBrainScrambler);
        assertBrainsAndScore(turn, 9, 21);
        turn.keepGoing(onlyBrainScrambler);
        assertBrainsAndScore(turn, 12, 24);
        turn.keepGoing(onlyBrainScrambler);
        // Second overflow
        assertBrainsAndScore(turn, 3, 27);
        turn.keepGoing(onlyBrainScrambler);
        assertBrainsAndScore(turn, 6, 30);
    },
    'dead after 3 shotguns': function() {
        turn.keepGoing(onlyShotgunScrambler);
        assert.equal(turn.shotguns(), 3);
        assert.ok(turn.itsOver());

        var status = turn.status();
        assert.equal(status.score, 0);
        assert.equal(status.itsOver, true);
        assert.equal(status.brains.length, 0);
        assert.equal(status.footprints.length, 0);
        assert.equal(status.shotguns.length, 3);
    },
    'Status should be immutable from turn state': function() {
        turn = new TurnFactory().createTurn(new FixedScrambler({value: 100})); // Do not scramble the cup please.
        var status = turn.status();
        turn.keepGoing(onlyBrainScrambler);
        assert.equal(turn.brains(), 3);
        turn.keepGoing(onlyFootprintScrambler);
        assert.equal(turn.footprints(), 3);
        turn.keepGoing(onlyShotgunScrambler);
        assert.equal(turn.shotguns(), 3);
        assert.equal(status.brains.length, 0);
        assert.equal(status.footprints.length, 0);
        assert.equal(status.shotguns.length, 0);
    }
    
    // FOOT PRINTS ARE NOT USED WHEN ROLLING!!!!!
};

function assertBrainsAndScore(turn, brains, score) {
    assert.equal(turn.brains(), brains);
    assert.equal(turn.score(), score);
}
