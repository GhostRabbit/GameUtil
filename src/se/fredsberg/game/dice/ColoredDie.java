package se.fredsberg.game.dice;

import java.awt.Color;
import java.util.List;

public class ColoredDie<T> extends CustomDie<T> {

    private Color color;

    public ColoredDie(Color color, List<T> sides) {
        super(sides);
        this.color = color;
    }

    public Color getColor() {
        return color;
    }

}
