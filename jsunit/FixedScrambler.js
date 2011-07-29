function FixedScrambler(value) {
	this.value = value;
};

FixedScrambler.prototype.random = function(upperExclusiveLimit) {
	return this.value % upperExclusiveLimit;
};

FixedScrambler.prototype.scramble = function(list) {
};
