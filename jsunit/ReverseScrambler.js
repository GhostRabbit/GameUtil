/**
 * 
 */

function ReverseScrambler() {
};

ReverseScrambler.prototype.random = function(upperExclusiveLimit) {
	return upperExclusiveLimit - 1;
}

ReverseScrambler.prototype.scramble = function(values) {
	values.reverse();
};
