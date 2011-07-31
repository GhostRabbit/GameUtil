var BackBone = require('backbone');
var CustomDie = BackBone.Model.extend({
    initialize: function(options) {
        this.selectedSideIndex = 0;
        this.color = options.color; // Concept of color should be extracted
        this.sides = options.sides.slice();
        this.selectedSide = function() {
            return this.selectedSideIndex;
        };
    },
    getResult: function() {
        return this.sides[this.selectedSide()];
    },
    roll: function(scrambler) {
        this.selectedSideIndex = scrambler.random(this.getSize());
    },
    getSize: function() {
        return this.sides.length;
    },
    getColor: function() {
        return this.color;
    }
});
module.exports = CustomDie;
