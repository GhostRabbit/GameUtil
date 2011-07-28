/**
 *
 */

function RandomScrambler() {
};

RandomScrambler.prototype.random = function(upperExclusiveLimit) {
	return Math.floor(Math.random() * upperExclusiveLimit);
};

RandomScrambler.prototype.scramble = function(o) {
	for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
};
