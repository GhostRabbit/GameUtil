/**
 *
 */

function ZombieDieFactory() {
	this.getRedZombieSides = function() {
		return [ZombieValue.values.BRAIN, 
		        ZombieValue.values.FOOTPRINTS,
		        ZombieValue.values.FOOTPRINTS,
		        ZombieValue.values.SHOOTGUN,
		        ZombieValue.values.SHOOTGUN,
		        ZombieValue.values.SHOOTGUN];
	};

	this.getYellowZombieSides = function() {
		return [ZombieValue.values.BRAIN,
		        ZombieValue.values.BRAIN,
		        ZombieValue.values.FOOTPRINTS,
		        ZombieValue.values.FOOTPRINTS,
		        ZombieValue.values.SHOOTGUN,
		        ZombieValue.values.SHOOTGUN];
	};

	this.getGreenZombieSides = function() {
		return [ZombieValue.values.BRAIN,
		        ZombieValue.values.BRAIN,
		        ZombieValue.values.BRAIN,
		        ZombieValue.values.FOOTPRINTS,
		        ZombieValue.values.FOOTPRINTS,
		        ZombieValue.values.SHOOTGUN];
	};
};

ZombieDieFactory.prototype.redZombieDie = function() {
	return new ZombieDie(Color.colors.RED, this.getRedZombieSides());
};

ZombieDieFactory.prototype.yellowZombieDie = function() {
	return new ZombieDie(Color.colors.YELLOW, this.getYellowZombieSides());
};

ZombieDieFactory.prototype.greenZombieDie = function() {
	return new ZombieDie(Color.colors.GREEN, this.getGreenZombieSides());
};


