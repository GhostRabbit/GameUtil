/**
 *
 */

function TurnFactory() {

	this.createPiles = function() {
		var piles = new Array(Object.keys(ZombieValue.values).length);
		for (var i = 0; i < piles.length; i++) {
			piles[i] = new Pool();
		}
		return piles;
	};

};

TurnFactory.prototype.createTurn = function() {
	var cup = new ZombieDicePool();
	cup.shake(new RandomScrambler());
	return new Turn(cup, this.createPiles());
};
