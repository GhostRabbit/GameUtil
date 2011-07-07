package se.fredsberg.game.dice;

import se.fredsberg.game.random.Scrambler;

public abstract class AbstractDie<T> implements Die<T> {

    private int selectedSideIndex = 0;
    
    @Override
    public void roll(Scrambler scrambler) {
        selectedSideIndex = scrambler.random(getSize());
    }
    
    protected int selectedSide() {
        return selectedSideIndex;
    }

    
}