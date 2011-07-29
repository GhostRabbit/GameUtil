function Turn(cup, piles) {
	this.cup = cup;
	this.piles = piles;
	this.overflowBrains = 0;
	this.stopped = false;

	this.getHandOfDice = function(scrambler) {
		var hand = new Array(3);
		for ( var i = 0; i < hand.length; i++) {
			hand[i] = this.getDie(scrambler);
		}
		return hand;
	};

	this.getDie = function(scrambler) {
		if (this.cup.isEmpty()) {
			this.overflowBrains += this.count(ZombieValue.values.BRAIN);
			this.resetDeck(scrambler);
		}

		return this.cup.pickOne();
	};

	this.resetDeck = function(scrambler) {
		var brains = piles[ZombieValue.values.BRAIN].pickAll();
		for ( var i = 0; i < brains.length; i++) {
			this.cup.add(brains[i]);
		}
		this.cup.shake(scrambler);
	};

	this.shoot = function() {
		return this.count(ZombieValue.values.SHOOTGUN) >= 3;
	};
	
	this.stillGoingStrong = function() {
		return !this.itsOver();
	}
};

Turn.prototype.count = function(zombieValue) {
	return this.piles[zombieValue].getCount();
};

Turn.prototype.keepGoing = function(scrambler) {
	if (this.stillGoingStrong()) {
		var handOfDice = this.getHandOfDice(scrambler);
		for ( var i = 0; i < handOfDice.length; i++) {
			var die = handOfDice[i];
			die.roll(scrambler);
			this.piles[die.getResult()].add(die);
		}
	}
};

Turn.prototype.score = function() {
	if (this.shoot()) {
		return 0;
	}
	return this.count(ZombieValue.values.BRAIN) + this.overflowBrains;
};

Turn.prototype.itsOver = function() {
	return this.stopped || this.shoot();
};
