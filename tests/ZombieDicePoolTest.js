var assert = require('assert');
var ZombieDicePool = require('../lib/ZombieDicePool');
module.exports = {
    'pools should be seperate': function() {
        var pool1 = new ZombieDicePool();
        var pool2 = new ZombieDicePool();
        assert.equal(13, pool1.getCount());
        assert.equal(13, pool2.getCount());
    }
};