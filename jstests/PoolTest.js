var assert = require('assert');
var Pool = require('../jssrc/Pool.js');
var ReverseScrambler = require('./ReverseScrambler.js');
module.exports = {
    GetCount: function() {
        assert.equal(0, new Pool().getCount());
    },
    IsEmpty: function() {
        assert.equal(true, new Pool().isEmpty());
    },
    Add: function() {
        var pool = new Pool();
        pool.add(6);
        assert.equal(false, pool.isEmpty());
        assert.equal(1, pool.getCount());
    },
    PickAll_shouldBeEmptyAfter: function() {
        var pool = new Pool();
        pool.add(6);
        var all = pool.pickAll();
        assert.equal(1, all.length);
        assert.equal(6, all[0]);
        assert.equal(true, pool.isEmpty());
    },
    PickOne: function() {
        var pool = new Pool();
        pool.add(6);
        assert.equal(6, pool.pickOne());
    },
    Add_checkFifoOrder: function() {
        var pool = new Pool();
        pool.add(6);
        pool.add(9);
        assert.equal(6, pool.pickOne());
        assert.equal(9, pool.pickOne());
    },
    Pickone_undefinedIfEmpty: function() {
        var pool = new Pool();
        assert.equal(undefined, pool.pickOne());
    },
    Shake_inRevereseOrderWhenReverseScramblerIsUsed: function() {
        var pool = new Pool();
        pool.add(1);
        pool.add(2);
        pool.shake(new ReverseScrambler());
        assert.equal(2, pool.pickOne());
        assert.equal(1, pool.pickOne());
    }
};
