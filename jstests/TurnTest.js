var assert = require('assert');
var Turn = require('../jssrc/Turn.js');
var TurnFactory = require('../jssrc/TurnFactory.js');
var ZombieValue = require('../jssrc/ZombieValue.js');
var FixedScrambler = require('./FixedScrambler.js');

module.exports = {
InitialState: function() {
    var turn = new TurnFactory().createTurn();
    var z = new ZombieValue();
	assert.equal(0, turn.count(z.values.BRAIN));
	assert.equal(0, turn.count(z.values.FOOTPRINTS));
	assert.equal(0, turn.count(z.values.SHOOTGUN));
},
Score_afterOneGoodRoll:
 function() {
	var turn = new TurnFactory().createTurn();
	var onlyBrainsScrambler = new FixedScrambler({value: 0});
    console.log("ran: ", onlyBrainsScrambler.random(5));
	turn.keepGoing(onlyBrainsScrambler);
	assert.equal(3, turn.count(new ZombieValue().values.BRAIN));
	assert.equal(3, turn.score());
},

Score_whenDead: function() {
	var turn = new TurnFactory().createTurn();
	var onlyBrainsScrambler = new FixedScrambler({value: 0});
	turn.keepGoing(onlyBrainsScrambler);
	assert.equal(3, turn.score());
	var onlyShootgunScrambler = new FixedScrambler({value: 5});
	turn.keepGoing(onlyShootgunScrambler);
	assert.equal(true, turn.itsOver());
	assert.equal(0, turn.score());
},

Score_manyGoodRollsShouldUseBrainOverflowCounter: function() {
    var turn = new TurnFactory().createTurn();
    var onlyBrainScrambler = new FixedScrambler({value: 0});
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

Count_deadAfter3Shotguns: function() {
	var turn = new TurnFactory().createTurn();
    var onlyShotgunScrambler = new FixedScrambler({value: 5});
    turn.keepGoing(onlyShotgunScrambler);
    assert.equal(3, turn.count(new ZombieValue().values.SHOOTGUN));
    assert.equal(true, turn.itsOver());
}
    
};

function assertBrainsAndScore(turn, brains, score) {
    assert.equal(brains, turn.count(new ZombieValue().values.BRAIN));
    assert.equal(score, turn.score());
};
