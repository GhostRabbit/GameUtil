var assert = require('assert');
var ZombieDieFactory = require('../lib/ZombieDieFactory.js');
var ZombieValue = require('../lib/ZombieValue.js');
var Color = require('../lib/Color.js');

var brain = ZombieValue.values.BRAIN;
var footprints = ZombieValue.values.FOOTPRINTS;
var shootgun = ZombieValue.values.SHOOTGUN;

module.exports = {
    'Red ZombieDie properties': function() {
        var red = new ZombieDieFactory().redZombieDie();
        assert.equal(Color.colors.RED, red.getColor());
        assert.equal(6, red.getSize());
        var sides = red.getSides();
        assert.equal(sides[0], brain);
        assert.equal(sides[1], footprints);
        assert.equal(sides[2], footprints);
        assert.equal(sides[3], shootgun);
        assert.equal(sides[4], shootgun);
        assert.equal(sides[5], shootgun);
    },
    'Yellow ZombieDie properties': function() {
        var yellow = new ZombieDieFactory().yellowZombieDie();
        assert.equal(Color.colors.YELLOW, yellow.getColor());
        assert.equal(6, yellow.getSize());
        var sides = yellow.getSides();
        assert.equal(sides[0], brain);
        assert.equal(sides[1], brain);
        assert.equal(sides[2], footprints);
        assert.equal(sides[3], footprints);
        assert.equal(sides[4], shootgun);
        assert.equal(sides[5], shootgun);
    },
    'Green ZombieDie properties': function() {
        var green = new ZombieDieFactory().greenZombieDie();
        assert.equal(Color.colors.GREEN, green.getColor());
        assert.equal(6, green.getSize());
        var sides = green.getSides();
        assert.equal(sides[0], brain);
        assert.equal(sides[1], brain);
        assert.equal(sides[2], brain);
        assert.equal(sides[3], footprints);
        assert.equal(sides[4], footprints);
        assert.equal(sides[5], shootgun);
    }
};