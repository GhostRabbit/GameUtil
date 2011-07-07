package se.fredsberg.game.random;

import java.util.Collections;
import java.util.List;

import se.fredsberg.game.random.Scrambler;

public class ReverseScrambler implements Scrambler {

    @Override
    public int random(int upperExclusiveLimit) {
        return upperExclusiveLimit - 1;
    }

    @Override
    public void scramble(List<?> values) {
        Collections.reverse(values);
    }

}
