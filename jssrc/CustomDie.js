var BackBone = require('backbone');

var CustomDie = BackBone.Model.extend( {
    initialize: function(options) {
        this.selectedSideIndex = 0;
        this.color = options[color];
	    this.sides = options[sides].slice();
    }
}
);

module.exports = {
};

/*
function CustomDie(color, sides) {
	this.selectedSideIndex = 0;
	this.color = color;
	this.sides = sides.slice();
	
	this.selectedSide = function() {
		return this.selectedSideIndex;
	};
}

CustomDie.prototype.getColor = function() {
	return this.color;
};

CustomDie.prototype.getSize = function() {
	return this.sides.length;
};

CustomDie.prototype.getResult = function() {
	return this.sides[this.selectedSide()];
};

CustomDie.prototype.roll = function(scrambler) {
	this.selectedSideIndex = scrambler.random(this.getSize());
};
*/