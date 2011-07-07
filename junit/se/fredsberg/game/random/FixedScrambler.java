package se.fredsberg.game.random;

import java.util.List;

public class FixedScrambler implements Scrambler {

    private final int value;

    public FixedScrambler(int value) {
        this.value = value;
    }
    
    @Override
    public int random(int upperExclusiveLimit) {
        return value % upperExclusiveLimit;
    }

    @Override
    public void scramble(List<?> values) {
    }

}
