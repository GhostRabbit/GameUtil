var BackBone = require('backbone');
var Pool = BackBone.Model.extend({
    initialize: function() {
        this.list = [];
    },
    getCount: function() {
        return this.list.length;
    },
    isEmpty: function() {
        return this.getCount() === 0;
    },
    add: function(o) {
        this.list.push(o);
    },
    pickAll: function() {
        var temp = this.list;
        this.list = [];
        return temp;
    },
    pickOne: function() {
        return this.list.shift();
    },
    shake: function(scrambler) {
        scrambler.scramble(this.list);
    }
});
module.exports = Pool;