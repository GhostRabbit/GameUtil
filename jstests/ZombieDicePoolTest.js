var assert = require('assert');
var ZombieDicePool = require('../jssrc/ZombieDicePool');
module.exports = {
    PoolsShouldBeSeperate: function() {
        var pool1 = new ZombieDicePool();
        var pool2 = new ZombieDicePool();
        assert.equal(13, pool1.getCount());
        assert.equal(13, pool2.getCount());
    }
};