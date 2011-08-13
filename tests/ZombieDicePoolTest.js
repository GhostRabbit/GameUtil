var assert = require('assert');
var ZombieDicePool = require('../lib/ZombieDicePool');
var Color = require('../lib/Color.js');

var pool;
module.exports = {
    'beforetests': function() {
        pool = new ZombieDicePool();
    },
    'pools should be seperate': function() {
        var otherPool = new ZombieDicePool();
        assert.equal(pool.getCount(), 13);
        assert.equal(otherPool.getCount(), 13);
    },
    'pool should contain 3 red dice': function() {
        assert.equal(count(pool, Color.colors.RED), 3);
    },
    'pool should contain 4 yellow dice': function() {
        assert.equal(count(pool, Color.colors.YELLOW), 4);
    },
    'pool should contain 6 green dice': function() {
        assert.equal(count(pool, Color.colors.GREEN), 6);
    }
};

function count(pool, color) {
    return pool.list.filter(function(die) {
        return die.getColor() == color;
    }).length;
}
