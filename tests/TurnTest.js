var assert = require('assert');
var Turn = require('../lib/Turn.js');
var TurnFactory = require('../lib/TurnFactory.js');
var ZombieValue = require('../lib/ZombieValue.js');
var FixedScrambler = require('./FixedScrambler.js');
module.exports = {
    'initial state of Turn': function() {
        var turn = new TurnFactory().createTurn();
        var z = ZombieValue;
        assert.equal(0, turn.count(z.values.BRAIN));
        assert.equal(0, turn.count(z.values.FOOTPRINTS));
        assert.equal(0, turn.count(z.values.SHOOTGUN));
    },
    'Score after one good roll': function() {
        var turn = new TurnFactory().createTurn();
        var onlyBrainsScrambler = new FixedScrambler({
            value: 0
        });
        turn.keepGoing(onlyBrainsScrambler);
        assert.equal(3, turn.count(ZombieValue.values.BRAIN));
        assert.equal(3, turn.score());
    },
    'Score when dead': function() {
        var turn = new TurnFactory().createTurn();
        var onlyBrainsScrambler = new FixedScrambler({
            value: 0
        });
        turn.keepGoing(onlyBrainsScrambler);
        assert.equal(3, turn.score());
        var onlyShootgunScrambler = new FixedScrambler({
            value: 5
        });
        turn.keepGoing(onlyShootgunScrambler);
        assert.equal(true, turn.itsOver());
        assert.equal(0, turn.score());
    },
    'many good rolls should use brain overflow counter': function() {
        var turn = new TurnFactory().createTurn();
        var onlyBrainScrambler = new FixedScrambler({
            value: 0
        });
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
        var turn = new TurnFactory().createTurn();
        var onlyShotgunScrambler = new FixedScrambler({
            value: 5
        });
        turn.keepGoing(onlyShotgunScrambler);
        assert.equal(3, turn.count(ZombieValue.values.SHOOTGUN));
        assert.equal(true, turn.itsOver());
    }
};

function assertBrainsAndScore(turn, brains, score) {
    assert.equal(brains, turn.count(ZombieValue.values.BRAIN));
    assert.equal(score, turn.score());
}
