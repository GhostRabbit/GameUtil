package se.fredsberg.game.random;

import java.util.List;

public interface Scrambler {

    int random(int upperExclusiveLimit);
    
    void scramble(List<?> values);
}
