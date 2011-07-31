var assert = require('assert');
var CustomDie = require('../jssrc/CustomDie.js');

module.exports = {
    'GetResult_unrolledDieShouldGiveFirstSideAsResult' : function() {
	    var die = new CustomDie({sides: [3]});
	    assert.equal(3, die.getResult());
    }
    /*
    ,
    
    'GetResult_modifyingOriginalListOfSidesShouldNotEffectDie' : function() {
	var sides = [3, 5];
	var die = new CustomDie(null, sides);
	sides[0] = 7;
	assertEquals(3, die.getResult());
    },

    'GetResult_reverseScramblerShouldGiveLastSideWhenRolled' : function() {
	var sides = [3, 5];
	var die = new CustomDie(null, sides);
	die.roll(new ReverseScrambler());
	assertEquals(5, die.getResult());
    }
    */
};


