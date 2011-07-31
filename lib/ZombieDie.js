var BackBone = require('backbone');
var CustomDie = require('./CustomDie.js');
var ZombieDie = CustomDie.extend({
    getSides: function() {
        return this.sides;
    }
});
module.exports = ZombieDie;