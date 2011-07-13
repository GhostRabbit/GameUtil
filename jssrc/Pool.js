/**
 * 
 */
var myapp = {};

myapp.Pool = function() { 
	this.list = new Array();
};

myapp.Pool.prototype.getCount = function() {
	return this.list.length;
};

myapp.Pool.prototype.isEmpty = function() {
	return this.getCount() == 0;
};

myapp.Pool.prototype.add = function(o) {
	this.list.push(o);
};

myapp.Pool.prototype.pickOne = function() {
	return this.list.shift();
};

