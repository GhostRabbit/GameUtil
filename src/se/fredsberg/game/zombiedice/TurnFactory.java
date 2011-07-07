package se.fredsberg.game.zombiedice;

import java.util.HashMap;
import java.util.Map;

import se.fredsberg.game.container.Pool;
import se.fredsberg.game.dice.zombie.ZombieDie;
import se.fredsberg.game.dice.zombie.ZombieValue;
import se.fredsberg.game.random.RandomScrambler;

public class TurnFactory {

    public Turn createTurn() {
        ZombieDicePool cup = new ZombieDicePool();
        cup.shake(new RandomScrambler());
        return new Turn(cup, createPiles());
    }

    public Map<ZombieValue, Pool<ZombieDie>> createPiles() {
        Map<ZombieValue, Pool<ZombieDie>> piles = new HashMap<ZombieValue, Pool<ZombieDie>>();
        for (ZombieValue value : ZombieValue.values()) {
            piles.put(value, new Pool<ZombieDie>());
        }
        return piles;
    }

}
