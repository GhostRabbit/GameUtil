/**
 *
 */

function ZombieDie(color, sides) {
	this.color = color;
	this.sides = sides.slice();
	this.selectedSideIndex = 0;
	
	this.selectedSide = function() {
		return this.selectedSideIndex;
	}
};

ZombieDie.prototype.getColor = function() {
	return this.color;
};

ZombieDie.prototype.getSize = function() {
	return this.sides.length;
};

ZombieDie.prototype.getSides = function() {
	return this.sides;
};

ZombieDie.prototype.getResult = function() {
	return this.sides[this.selectedSide()];
};

ZombieDie.prototype.roll = function(scrambler) {
	this.selectedSideIndex = scrambler.random(this.getSize());
};
