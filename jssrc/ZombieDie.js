ZombieDie.prototype = new CustomDie(null, []);
ZombieDie.prototype.constructor = ZombieDie;
function ZombieDie(color, sides) {
	this.color = color;
	this.sides = sides.slice();
};

ZombieDie.prototype.getSides = function() {
	return this.sides;
};
