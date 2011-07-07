package se.fredsberg.game.dice;

import se.fredsberg.game.random.Scrambler;

public interface Die<T> {
    
    void roll(Scrambler scrambler);
    
    T getResult();

    int getSize();
}
