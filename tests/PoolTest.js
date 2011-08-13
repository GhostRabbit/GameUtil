var assert = require('assert');
var Pool = require('../lib/Pool.js');
var ReverseScrambler = require('./ReverseScrambler.js');

var pool;
module.exports = {
    'setup': function() {
        pool = new Pool();
    },
    'inital count should be 0': function() {
        assert.equal(pool.getCount(), 0);
    },
    'pool should initially be empty': function() {
        assert.ok(pool.isEmpty());
    },
    'test Add': function() {
        pool.add(6);
        assert.equal(pool.isEmpty(), false);
        assert.equal(pool.getCount(), 1);
    },
    'PickAll should empty pool': function() {
        pool.add(6);
        var all = pool.pickAll();
        assert.equal(all.length, 1);
        assert.equal(all[0], 6);
        assert.ok(pool.isEmpty());
    },
    'test PickOne': function() {
        pool.add(6);
        assert.equal(pool.pickOne(), 6);
        assert.ok(pool.isEmpty());
    },
    'check fifo order of Add': function() {
        pool.add(6);
        pool.add(9);
        assert.equal(pool.pickOne(), 6);
        assert.equal(pool.pickOne(), 9);
    },
    'PickOne returns undefined if Pool is empty': function() {
        assert.equal(pool.pickOne(), undefined);
    },
    'Pool should be in reverse order after Shake with a ReverseScrambler': function() {
        pool.add(1);
        pool.add(2);
        pool.shake(new ReverseScrambler());
        assert.equal(pool.pickOne(), 2);
        assert.equal(pool.pickOne(), 1);
    }
};
