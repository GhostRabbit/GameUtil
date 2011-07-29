TurnTest = TestCase("turnTest");

TurnTest.prototype.testInitialState = function() {
	var turn = new TurnFactory().createTurn();
	assertEquals(0, turn.count(ZombieValue.values.BRAIN));
	assertEquals(0, turn.count(ZombieValue.values.FOOTPRINTS));
	assertEquals(0, turn.count(ZombieValue.values.SHOOTGUN));
};

TurnTest.prototype.testScore_afterOneGoodRoll = function() {
	var turn = new TurnFactory().createTurn();
	var onlyBrainsScrambler = new FixedScrambler(0);
	turn.keepGoing(onlyBrainsScrambler);
	assertEquals(3, turn.count(ZombieValue.values.BRAIN));
	assertEquals(3, turn.score());
};

TurnTest.prototype.testScore_whenDead = function() {
	var turn = new TurnFactory().createTurn();
	var onlyBrainsScrambler = new FixedScrambler(0);
	turn.keepGoing(onlyBrainsScrambler);
	assertEquals(3, turn.score());
	var onlyShootgunScrambler = new FixedScrambler(5);
	turn.keepGoing(onlyShootgunScrambler);
	assertTrue(turn.itsOver());
	assertEquals(0, turn.score());
};

TurnTest.prototype.testScore_manyGoodRollsShouldUseBrainOverflowCounter = function() {
    var turn = new TurnFactory().createTurn();
    var onlyBrainScrambler = new FixedScrambler(0);
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
};

TurnTest.prototype.testCount_deadAfter3Shotguns = function() {
	var turn = new TurnFactory().createTurn();
    var onlyShotgunScrambler = new FixedScrambler(5);
    turn.keepGoing(onlyShotgunScrambler);
    assertEquals(3, turn.count(ZombieValue.values.SHOOTGUN));
    assertTrue(turn.itsOver());
};

function assertBrainsAndScore(turn, brains, score) {
    assertEquals(brains, turn.count(ZombieValue.values.BRAIN));
    assertEquals(score, turn.score());
};
