var assert = require('assert');
var RandomScrambler = require('../lib/RandomScrambler.js');
module.exports = {
    'test Random': function() {
        // Quite a bad test due to randomness but chances for random failure is less then nothing
        var results = [0, 0, 0];
        var scrambler = new RandomScrambler();
        for (var i = 0; i < 20; i++) {
            results[scrambler.random(2)]++;
        }
        assert.equal(true, results[0] > 0);
        assert.equal(true, results[1] > 0);
        assert.equal(0, results[2]);
    },
    'test Scramble': function() {
        var results = [0, 0];
        var scrambler = new RandomScrambler();
        for (var i = 0; i < 20; i++) {
            var arr = [0, 1];
            scrambler.scramble(arr);
            results[arr[0]]++;
        }
        assert.equal(true, results[0] > 0);
        assert.equal(true, results[1] > 0);
    }
};