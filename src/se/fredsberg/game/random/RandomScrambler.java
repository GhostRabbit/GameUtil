package se.fredsberg.game.random;

import java.util.Collections;
import java.util.List;

public class RandomScrambler implements Scrambler {

    @Override
    public int random(int upperExclusiveLimit) {
        return (int) (Math.random() * upperExclusiveLimit);
    }

    @Override
    public void scramble(List<?> values) {
        Collections.shuffle(values);
    }

}
