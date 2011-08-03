var assert = require('assert');
var ZombieDicePool = require('../lib/ZombieDicePool');
var Color = require('../lib/Color.js');
module.exports = {
    'pools should be seperate': function() {
        var pool1 = new ZombieDicePool();
        var pool2 = new ZombieDicePool();
        assert.equal(pool1.getCount(), 13);
        assert.equal(pool2.getCount(), 13);
    },
    'pool should contain 3 red dice': function() {
        assert.equal(count(new ZombieDicePool(), Color.colors.RED), 3);
    },
    'pool should contain 4 yellow dice': function() {
        assert.equal(count(new ZombieDicePool(), Color.colors.YELLOW), 4);
    },
    'pool should contain 6 green dice': function() {
        assert.equal(count(new ZombieDicePool(), Color.colors.GREEN), 6);
    }
};

function count(pool, color) {
    var c = 0;
    for (var die = pool.pickOne(); die; die = pool.pickOne()) {
        if (die.getColor() == color) {
            c++;
        }
    }
    return c;
}