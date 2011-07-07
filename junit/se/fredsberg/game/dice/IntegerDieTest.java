package se.fredsberg.game.dice;

import static org.junit.Assert.*;

import org.junit.Test;

import se.fredsberg.game.random.ReverseScrambler;

public class IntegerDieTest {

    @Test
    public void getResult_defaultValueOfNewDie() {
        IntegerDie die = new IntegerDie(4);
        assertEquals(1, (int) die.getResult());
    }

    @Test
    public void getSize_shouldBeEqualToNumberOfSides() {
        IntegerDie die = new IntegerDie(4);
        assertEquals(4, die.getSize());
    }

    @Test
    public void getResult_reversedDieShouldGiveLastValue() {
        IntegerDie die = new IntegerDie(4);
        die.roll(new ReverseScrambler());
        assertEquals(4, (int) die.getResult());
    }
}
