package se.fredsberg.game.zombiedice;

import static org.junit.Assert.*;

import org.junit.Test;

import se.fredsberg.game.container.Pool;
import se.fredsberg.game.dice.zombie.ZombieDie;
import se.fredsberg.game.dice.zombie.ZombieDieFactory;
import se.fredsberg.game.dice.zombie.ZombieValue;
import se.fredsberg.game.random.FixedScrambler;
import se.fredsberg.game.random.Scrambler;

public class TurnTest {

    // Not a best test here. Uses internal order of ZombieDie

    @Test
    public void initialState() {
        Turn turn = new TurnFactory().createTurn();
        assertEquals(0, turn.count(ZombieValue.BRAIN));
        assertEquals(0, turn.count(ZombieValue.FOOTPRINTS));
        assertEquals(0, turn.count(ZombieValue.SHOOTGUN));
        assertEquals(0, turn.score());
        assertFalse(turn.itsOver());
    }

    @Test
    public void score_afterOneGoodRoll() {
        Turn turn = new TurnFactory().createTurn();
        Scrambler onlyBrainsScrambler = new FixedScrambler(0);
        turn.keepGoing(onlyBrainsScrambler);
        assertEquals(3, turn.count(ZombieValue.BRAIN));
        assertEquals(3, turn.score());
    }

    @Test
    public void score_whenDead() {
        Turn turn = new TurnFactory().createTurn();
        Scrambler onlyBrainsScrambler = new FixedScrambler(0);
        turn.keepGoing(onlyBrainsScrambler);
        assertEquals(3, turn.count(ZombieValue.BRAIN));
        assertEquals(3, turn.score());
        Scrambler onlyShootgunScrambler = new FixedScrambler(5);
        turn.keepGoing(onlyShootgunScrambler);
        assertTrue(turn.itsOver());
        assertEquals(0, turn.score());
    }

    @Test
    public void score_afterManyGoodRolls() {
        Turn turn = new TurnFactory().createTurn();
        Scrambler onlyBrainsScrambler = new FixedScrambler(0);
        assertBrainsAndScore(turn, 0, 0);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 3, 3);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 6, 6);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 9, 9);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 12, 12);
        // First overflow
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 3, 15);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 6, 18);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 9, 21);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 12, 24);
        turn.keepGoing(onlyBrainsScrambler);
        // Second overflow
        assertBrainsAndScore(turn, 3, 27);
        turn.keepGoing(onlyBrainsScrambler);
        assertBrainsAndScore(turn, 6, 30);
    }

    @Test
        public void keepGoing_useFootPrints() {
            Pool<ZombieDie> cup = new Pool<ZombieDie>();
            ZombieDieFactory dieFactory = new ZombieDieFactory();
            cup.add(dieFactory.greenZombieDie());
            cup.add(dieFactory.greenZombieDie());
            cup.add(dieFactory.greenZombieDie());
            cup.add(dieFactory.yellowZombieDie());
            cup.add(dieFactory.greenZombieDie());
            cup.add(dieFactory.yellowZombieDie());
            Turn turn = new Turn(cup, new TurnFactory().createPiles());
            // 2 on yellow == Footprints, 2 on green == Brain
            Scrambler mixedFootprintsAndBrains = new FixedScrambler(2);
            turn.keepGoing(mixedFootprintsAndBrains);
            assertEquals(3, turn.score());
            turn.keepGoing(mixedFootprintsAndBrains);
            assertEquals(4, turn.score());
            assertEquals(2, turn.count(ZombieValue.FOOTPRINTS));
            turn.keepGoing(mixedFootprintsAndBrains);
            assertEquals(5, turn.score());
            assertEquals(2, turn.count(ZombieValue.FOOTPRINTS));
        }

    @Test
        public void keepGoing_sholdShakeCupAfterOverflow() {
            class ShakeCountedPool<T> extends Pool<T> {
    
                public int shakeCounter;
    
                @Override
                public void shake(Scrambler scrambler) {
                    shakeCounter++;
                }
            }
            ShakeCountedPool<ZombieDie> cup = new ShakeCountedPool<ZombieDie>();
            ZombieDieFactory dieFactory = new ZombieDieFactory();
            cup.add(dieFactory.greenZombieDie());
            cup.add(dieFactory.greenZombieDie());
            cup.add(dieFactory.greenZombieDie());
            Turn turn = new Turn(cup, new TurnFactory().createPiles());
            Scrambler onlyBrains = new FixedScrambler(0);
            turn.keepGoing(onlyBrains);
            assertEquals(0, cup.shakeCounter);
            turn.keepGoing(onlyBrains);
            assertEquals(1, cup.shakeCounter);
        }

    @Test
    public void count_deadAfter3Shotguns() {
        Turn turn = new TurnFactory().createTurn();
        Scrambler onlyShotgunsScrambler = new FixedScrambler(5);
        turn.keepGoing(onlyShotgunsScrambler);
        assertEquals(3, turn.count(ZombieValue.SHOOTGUN));
        assertTrue(turn.itsOver());
    }

    @Test(expected = IllegalStateException.class)
        public void keepGoing_whenDead() {
            Turn turn = new TurnFactory().createTurn();
            Scrambler onlyShotgunsScrambler = new FixedScrambler(5);
            turn.keepGoing(onlyShotgunsScrambler);
            turn.keepGoing(onlyShotgunsScrambler);
        }

    @Test(expected = IllegalStateException.class)
    public void stop_noMoreRollsAllowed() {
        Turn turn = new TurnFactory().createTurn();
        turn.keepGoing(new FixedScrambler(0));
        assertEquals(3, turn.stop());
        turn.keepGoing(new FixedScrambler(0));
    }

    private void assertBrainsAndScore(Turn turn, int brains, int score) {
        assertEquals(brains, turn.count(ZombieValue.BRAIN));
        assertEquals(score, turn.score());
    }

}
