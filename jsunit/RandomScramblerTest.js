/**
 *
 */

RandomScramblerTest = TestCase("randomScramblerTest");

RandomScramblerTest.prototype.testRandom = function() {
	// Quite a bad test due to randomness but chances for random failure is less then nothing
    var results = [0, 0, 0];
    var scrambler = new RandomScrambler();
    for (var i = 0; i < 20; i++) {
        results[scrambler.random(2)]++;
    }
    assertTrue(results[0] > 0);
    assertTrue(results[1] > 0);
    assertEquals(0, results[2]);
};

RandomScramblerTest.prototype.testScramble = function() {
	var results = [0, 0];
    var scrambler = new RandomScrambler();
    for (var i = 0; i < 20; i++) {
    	var arr = [0, 1];
    	scrambler.scramble(arr);
    	results[arr[0]]++;
    }
    assertTrue(results[0] > 0);
    assertTrue(results[1] > 0);
};
