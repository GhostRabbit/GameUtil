/**
 * 
 */

function Pool() {
	this.list = new Array();
};

Pool.prototype.getCount = function() {
	return this.list.length;
};

Pool.prototype.getCount = function() {
	return this.list.length;
};

Pool.prototype.isEmpty = function() {
	return this.getCount() == 0;
};

Pool.prototype.add = function(o) {
	this.list.push(o);
};

Pool.prototype.pickOne = function() {
	return this.list.shift();
};

Pool.prototype.pickAll = function() {
	var temp = this.list;
	this.list = new Array();
	return temp;
};

Pool.prototype.shake = function(scrambler) {
	scrambler.scramble(this.list);
};
