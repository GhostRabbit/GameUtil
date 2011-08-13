var assert = require('assert');
var Turn = require('../lib/Turn.js');
var TurnFactory = require('../lib/TurnFactory.js');
var ZombieValue = require('../lib/ZombieValue.js');
var FixedScrambler = require('./FixedScrambler.js');

var turn;
var onlyBrainsScrambler;
var onlyShotgunScrambler;
module.exports = {
    'setup': function() {
        turn = new TurnFactory().createTurn();
        onlyBrainsScrambler = new FixedScrambler({
            value: 0
        });
        onlyShotgunScrambler = new FixedScrambler({
            value: 5
        });
    },
    'initial state of Turn': function() {
        assert.equal(turn.brains(), 0);
        assert.equal(turn.footprints(), 0);
        assert.equal(turn.shootguns(), 0);
    },
    'Score after one good roll': function() {
        turn.keepGoing(onlyBrainsScrambler);
        assert.equal(turn.brains(), 3);
        assert.equal(turn.score(), 3);
    },
    'Score when dead': function() {
        turn.keepGoing(onlyBrainsScrambler);
        assert.equal(turn.score(), 3);
        turn.keepGoing(onlyShotgunScrambler);
        assert.ok(turn.itsOver());
        assert.equal(turn.score(), 0);
    },
    'many good rolls should use brain overflow counter': function() {
        assertBrainsAndScore(turn, 0, 0);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 3, 3);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 6, 6);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 9, 9);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 12, 12);
        // First overflow
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 3, 15);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 6, 18);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 9, 21);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 12, 24);
        turn.keepGoing(onlyBrainsScrambler);
        // Second overflow
        assertBrainsAndScore(turn, 3, 27);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 6, 30);
    },
    'dead after 3 shotguns': function() {
        turn.keepGoing(onlyShotgunScrambler);
        assert.equal(turn.shootguns(), 3);
        assert.ok(turn.itsOver());
    }
};

function assertBrainsAndScore(turn, brains, score) {
    assert.equal(turn.brains(), brains);
    assert.equal(turn.score(), score);
}
