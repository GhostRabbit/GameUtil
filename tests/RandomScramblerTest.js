var assert = require('assert');
var RandomScrambler = require('../lib/RandomScrambler.js');

var scrambler;
module.exports = {
    'setup': function() {
        scrambler = new RandomScrambler();
    },
    'test Random': function() {
        // Quite a bad test due to randomness but chances for random failure is less then nothing
        var results = [0, 0, 0];
        for (var i = 0; i < 20; i++) {
            results[scrambler.random(2)]++;
        }
        assert.ok(results[0] > 0);
        assert.ok(results[1] > 0);
        assert.equal(results[2], 0);
    },
    'test Scramble': function() {
        var results = [0, 0];
        for (var i = 0; i < 20; i++) {
            var arr = [0, 1];
            scrambler.scramble(arr);
            results[arr[0]]++;
        }
        assert.ok(results[0] > 0);
        assert.ok(results[1] > 0);
    }
};