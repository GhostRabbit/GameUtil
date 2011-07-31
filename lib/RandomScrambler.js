var BackBone = require('backbone');
var RandomScrambler = BackBone.Model.extend({
    random: function(upperExclusiveLimit) {
        return Math.floor(Math.random() * upperExclusiveLimit);
    },
    scramble: function(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    }
});
module.exports = RandomScrambler;