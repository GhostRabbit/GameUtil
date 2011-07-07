package se.fredsberg.game.dice;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CustomDie<T> extends AbstractDie<T> implements Die<T> {

    protected final List<T> sides;

    public CustomDie(List<T> sides) {
        this.sides = Collections.unmodifiableList(new ArrayList<T>(sides));
    }

    @Override
    public T getResult() {
        return sides.get(selectedSide());
    }

    @Override
    public int getSize() {
        return sides.size();
    }
}
