var assert = require('assert');
var CustomDie = require('../lib/CustomDie.js');
var ReverseScrambler = require('./ReverseScrambler.js');
module.exports = {
    'GetResult_unrolledDieShouldGiveFirstSideAsResult': function() {
        var die = new CustomDie({
            color: null,
            sides: [3]
        });
        assert.equal(die.getResult(), 3);
    },
    'GetResult_modifyingOriginalListOfSidesShouldNotEffectDie': function() {
        var sides = [3, 5];
        var die = new CustomDie({
            color: null,
            sides: sides
        });
        sides[0] = 7;
        assert.equal(die.getResult(), 3);
    },
    'GetResult_reverseScramblerShouldGiveLastSideWhenRolled': function() {
        var die = new CustomDie({
            color: null,
            sides: [3, 5]
        });
        die.roll(new ReverseScrambler());
        assert.equal(die.getResult(), 5);
    }
};