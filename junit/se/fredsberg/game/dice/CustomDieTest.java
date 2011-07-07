package se.fredsberg.game.dice;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.Test;

import se.fredsberg.game.random.ReverseScrambler;

public class CustomDieTest {

    @Test(expected = NullPointerException.class)
    public void constructor_noSidesIsNotOK() {
        new CustomDie<Integer>(null);
    }

    @Test
    public void constructor_checkCountOfNumberOfSidesAndDuplicates() {
        List<Float> singelSide = getSingleSide();
        assertEquals(1, new CustomDie<Float>(singelSide).getSize());
        List<Integer> duplicateSide = getDuplicateSides();
        assertEquals(2, new CustomDie<Integer>(duplicateSide).getSize());
    }

    @Test
    public void getResult_unrolledDieShouldGiveFirstSideAsResult() {
        List<Float> sides = getSingleSide();
        CustomDie<Float> die = new CustomDie<Float>(sides);
        assertSame(sides.get(0), die.getResult());
    }

    @Test
    public void getResult_modifyingOriginalListOfSidesShouldNotEffectDie() {
        List<Integer> sides = getDuplicateSides();
        CustomDie<Integer> die = new CustomDie<Integer>(sides);
        Integer firstSide = sides.remove(0);
        assertSame(firstSide, die.getResult());
    }
    
    @Test
    public void getResult_reverseRollOfDieShouldGiveLastSideAtRollOfDie() {
        List<Integer> sides = getDuplicateSides();
        CustomDie<Integer> die = new CustomDie<Integer>(sides);
        die.roll(new ReverseScrambler());
        assertSame(sides.get(1), die.getResult());
    }

    private List<Float> getSingleSide() {
        return Collections.<Float> singletonList(2.3f);
    }

    private List<Integer> getDuplicateSides() {
        return new ArrayList<Integer>(Arrays.asList(47, 11));
    }

}
