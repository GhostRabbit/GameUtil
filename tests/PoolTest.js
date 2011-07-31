var assert = require('assert');
var Pool = require('../lib/Pool.js');
var ReverseScrambler = require('./ReverseScrambler.js');
module.exports = {
    'inital count should be 0': function() {
        assert.equal(0, new Pool().getCount());
    },
    'pool should initially be empty': function() {
        assert.equal(true, new Pool().isEmpty());
    },
    'test Add': function() {
        var pool = new Pool();
        pool.add(6);
        assert.equal(false, pool.isEmpty());
        assert.equal(1, pool.getCount());
    },
    'PickAll should empty pool': function() {
        var pool = new Pool();
        pool.add(6);
        var all = pool.pickAll();
        assert.equal(1, all.length);
        assert.equal(6, all[0]);
        assert.equal(true, pool.isEmpty());
    },
    'test PickOne': function() {
        var pool = new Pool();
        pool.add(6);
        assert.equal(6, pool.pickOne());
        assert.equal(true, pool.isEmpty());
    },
    'check fifo order of Add': function() {
        var pool = new Pool();
        pool.add(6);
        pool.add(9);
        assert.equal(6, pool.pickOne());
        assert.equal(9, pool.pickOne());
    },
    'PickOne returns undefined if Pool is empty': function() {
        var pool = new Pool();
        assert.equal(undefined, pool.pickOne());
    },
    'Pool should be n reverse order after Shake with a ReverseScrambler': function() {
        var pool = new Pool();
        pool.add(1);
        pool.add(2);
        pool.shake(new ReverseScrambler());
        assert.equal(2, pool.pickOne());
        assert.equal(1, pool.pickOne());
    }
};
