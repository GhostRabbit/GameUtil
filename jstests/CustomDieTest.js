var assert = require('assert');
var CustomDie = require('../jssrc/CustomDie.js');
var ReverseScrambler = require('./ReverseScrambler.js');
module.exports = {
    'GetResult_unrolledDieShouldGiveFirstSideAsResult': function() {
        var die = new CustomDie({
            color: null,
            sides: [3]
        });
        assert.equal(3, die.getResult());
    },
    'GetResult_modifyingOriginalListOfSidesShouldNotEffectDie': function() {
        var sides = [3, 5];
        var die = new CustomDie({
            color: null,
            sides: sides
        });
        sides[0] = 7;
        assert.equal(3, die.getResult());
    },
    'GetResult_reverseScramblerShouldGiveLastSideWhenRolled': function() {
        var die = new CustomDie({
            color: null,
            sides: [3, 5]
        });
        die.roll(new ReverseScrambler());
        assert.equal(5, die.getResult());
    }
};