package se.fredsberg.game.zombiedice;

import java.util.List;
import java.util.Map;

import se.fredsberg.game.container.Pool;
import se.fredsberg.game.dice.zombie.ZombieDie;
import se.fredsberg.game.dice.zombie.ZombieValue;
import se.fredsberg.game.random.Scrambler;

public class Turn {

    private Pool<ZombieDie> cup;
    private int overflowBrains = 0;
    private Map<ZombieValue, Pool<ZombieDie>> piles;
    private boolean stopped = false;

    public Turn(Pool<ZombieDie> cup, Map<ZombieValue, Pool<ZombieDie>> piles) {
        this.cup = cup;
        this.piles = piles;
    }

    public int count(ZombieValue type) {
        return piles.get(type).getCount();
    }

    public boolean itsOver() {
        return stopped || shoot();
    }

    private boolean shoot() {
        return count(ZombieValue.SHOOTGUN) >= 3;
    }

    public void keepGoing(Scrambler scrambler) {
        assertStillGoingStrong();
        for (ZombieDie die : getHandOfDice(scrambler)) {
            die.roll(scrambler);
            piles.get(die.getResult()).add(die);
        }
    }

    public int score() {
        if (shoot()) {
            return 0;
        }
        return count(ZombieValue.BRAIN) + overflowBrains;
    }

    public int stop() {
        stopped = true;
        return score();
    }

    private void assertStillGoingStrong() {
        if (itsOver()) {
            throw new IllegalStateException();
        }
    }

    private ZombieDie getDie(Scrambler scrambler) {
        if (cup.isEmpty()) {
            overflowBrains += count(ZombieValue.BRAIN);
            resetDeck(scrambler);
        }
        return cup.pickOne();
    }

    private List<ZombieDie> getHandOfDice(Scrambler scrambler) {
        List<ZombieDie> hand = piles.get(ZombieValue.FOOTPRINTS).pickAll();
        while (hand.size() < 3) {
            hand.add(getDie(scrambler));
        }
        return hand;
    }

    private void resetDeck(Scrambler scrambler) {
        for (ZombieDie die : piles.get(ZombieValue.BRAIN).pickAll()) {
            cup.add(die);
        }
        cup.shake(scrambler);
    }
}
