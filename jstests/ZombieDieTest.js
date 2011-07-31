var assert = require('assert');
var ZombieDieFactory = require('../jssrc/ZombieDieFactory.js');
var ZombieValue = require('../jssrc/ZombieValue.js');
var Color = require('../jssrc/Color.js');

module.exports = {

RedZombieDie_properties: function() {
	var red = new ZombieDieFactory().redZombieDie();
	assert.equal(new Color().colors.RED, red.getColor());
	assert.equal(6, red.getSize());
	var sides = red.getSides();
    var z = new ZombieValue();
	assert.equal(z.values.BRAIN, sides[0]);
	assert.equal(z.values.FOOTPRINTS, sides[1]);
	assert.equal(z.values.FOOTPRINTS, sides[2]);
	assert.equal(z.values.SHOOTGUN, sides[3]);
	assert.equal(z.values.SHOOTGUN, sides[4]);
	assert.equal(z.values.SHOOTGUN, sides[5]);
},

YellowZombieDie_properties: function() {
	var yellow = new ZombieDieFactory().yellowZombieDie();
	assert.equal(new Color().colors.YELLOW, yellow.getColor());
	assert.equal(6, yellow.getSize());
	var sides = yellow.getSides();
    var z = new ZombieValue();
	assert.equal(z.values.BRAIN, sides[0]);
	assert.equal(z.values.BRAIN, sides[1]);
	assert.equal(z.values.FOOTPRINTS, sides[2]);
	assert.equal(z.values.FOOTPRINTS, sides[3]);
	assert.equal(z.values.SHOOTGUN, sides[4]);
	assert.equal(z.values.SHOOTGUN, sides[5]);
},

GreenZombieDie_properties: function() {
	var green = new ZombieDieFactory().greenZombieDie();
	assert.equal(new Color().colors.GREEN, green.getColor());
	assert.equal(6, green.getSize());
	var sides = green.getSides();
    var z = new ZombieValue();
	assert.equal(z.values.BRAIN, sides[0]);
	assert.equal(z.values.BRAIN, sides[1]);
	assert.equal(z.values.BRAIN, sides[2]);
	assert.equal(z.values.FOOTPRINTS, sides[3]);
	assert.equal(z.values.FOOTPRINTS, sides[4]);
	assert.equal(z.values.SHOOTGUN, sides[5]);
}
};
