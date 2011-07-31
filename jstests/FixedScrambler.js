var BackBone = require('backbone');
var FixedScrambler = BackBone.Model.extend({
    initialize: function(options) {
        this.value = options.value;
    },
    random: function(upperExclusiveLimit) {
        return this.value % upperExclusiveLimit;
    },
    scramble: function(list) {}
})
module.exports = FixedScrambler;
