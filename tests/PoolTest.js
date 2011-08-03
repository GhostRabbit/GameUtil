var assert = require('assert');
var Pool = require('../lib/Pool.js');
var ReverseScrambler = require('./ReverseScrambler.js');
module.exports = {
    'inital count should be 0': function() {
        assert.equal(new Pool().getCount(), 0);
    },
    'pool should initially be empty': function() {
        assert.ok(new Pool().isEmpty());
    },
    'test Add': function() {
        var pool = new Pool();
        pool.add(6);
        assert.equal(pool.isEmpty(), false);
        assert.equal(pool.getCount(), 1);
    },
    'PickAll should empty pool': function() {
        var pool = new Pool();
        pool.add(6);
        var all = pool.pickAll();
        assert.equal(all.length, 1);
        assert.equal(all[0], 6);
        assert.ok(pool.isEmpty());
    },
    'test PickOne': function() {
        var pool = new Pool();
        pool.add(6);
        assert.equal(pool.pickOne(), 6);
        assert.ok(pool.isEmpty());
    },
    'check fifo order of Add': function() {
        var pool = new Pool();
        pool.add(6);
        pool.add(9);
        assert.equal(pool.pickOne(), 6);
        assert.equal(pool.pickOne(), 9);
    },
    'PickOne returns undefined if Pool is empty': function() {
        var pool = new Pool();
        assert.equal(pool.pickOne(), undefined);
    },
    'Pool should be n reverse order after Shake with a ReverseScrambler': function() {
        var pool = new Pool();
        pool.add(1);
        pool.add(2);
        pool.shake(new ReverseScrambler());
        assert.equal(pool.pickOne(), 2);
        assert.equal(pool.pickOne(), 1);
    }
};
