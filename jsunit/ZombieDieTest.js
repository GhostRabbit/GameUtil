ZombieDieTest = TestCase("zombieDieTest");

ZombieDieTest.prototype.testRedZombieDie_properties = function() {
	var red = new ZombieDieFactory().redZombieDie();
	assertEquals(Color.colors.RED, red.getColor());
	assertEquals(6, red.getSize());
	var sides = red.getSides();
	assertEquals(ZombieValue.values.BRAIN, sides[0]);
	assertEquals(ZombieValue.values.FOOTPRINTS, sides[1]);
	assertEquals(ZombieValue.values.FOOTPRINTS, sides[2]);
	assertEquals(ZombieValue.values.SHOOTGUN, sides[3]);
	assertEquals(ZombieValue.values.SHOOTGUN, sides[4]);
	assertEquals(ZombieValue.values.SHOOTGUN, sides[5]);
};

ZombieDieTest.prototype.testYellowZombieDie_properties = function() {
	var yellow = new ZombieDieFactory().yellowZombieDie();
	assertEquals(Color.colors.YELLOW, yellow.getColor());
	assertEquals(6, yellow.getSize());
	var sides = yellow.getSides();
	assertEquals(ZombieValue.values.BRAIN, sides[0]);
	assertEquals(ZombieValue.values.BRAIN, sides[1]);
	assertEquals(ZombieValue.values.FOOTPRINTS, sides[2]);
	assertEquals(ZombieValue.values.FOOTPRINTS, sides[3]);
	assertEquals(ZombieValue.values.SHOOTGUN, sides[4]);
	assertEquals(ZombieValue.values.SHOOTGUN, sides[5]);
};

ZombieDieTest.prototype.testGreenZombieDie_properties = function() {
	var green = new ZombieDieFactory().greenZombieDie();
	assertEquals(Color.colors.GREEN, green.getColor());
	assertEquals(6, green.getSize());
	var sides = green.getSides();
	assertEquals(ZombieValue.values.BRAIN, sides[0]);
	assertEquals(ZombieValue.values.BRAIN, sides[1]);
	assertEquals(ZombieValue.values.BRAIN, sides[2]);
	assertEquals(ZombieValue.values.FOOTPRINTS, sides[3]);
	assertEquals(ZombieValue.values.FOOTPRINTS, sides[4]);
	assertEquals(ZombieValue.values.SHOOTGUN, sides[5]);
};
