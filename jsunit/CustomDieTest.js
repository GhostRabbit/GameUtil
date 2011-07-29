CustomDieTest = TestCase("customDieTest");

CustomDieTest.prototype.testGetResult_unrolledDieShouldGiveFirstSideAsResult = function() {
	var die = new CustomDie(null, [3]);
	assertEquals(3, die.getResult());
};

CustomDieTest.prototype.testGetResult_modifyingOriginalListOfSidesShouldNotEffectDie = function() {
	var sides = [3, 5];
	var die = new CustomDie(null, sides);
	sides[0] = 7;
	assertEquals(3, die.getResult());
};

CustomDieTest.prototype.testGetResult_reverseScramblerShouldGiveLastSideWhenRolled = function() {
	var sides = [3, 5];
	var die = new CustomDie(null, sides);
	die.roll(new ReverseScrambler());
	assertEquals(5, die.getResult());
};


