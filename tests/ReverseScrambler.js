var BackBone = require('backbone');
var ReverseScrambler = BackBone.Model.extend({
    random: function(upperExclusiveLimit) {
        return upperExclusiveLimit - 1;
    },
    scramble: function(values) {
        values.reverse();
    }
});
module.exports = ReverseScrambler;