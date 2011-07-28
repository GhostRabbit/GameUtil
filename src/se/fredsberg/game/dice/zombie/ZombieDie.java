package se.fredsberg.game.dice.zombie;

import java.awt.Color;
import java.util.List;

import se.fredsberg.game.dice.ColoredDie;

public class ZombieDie extends ColoredDie<ZombieValue> {

    public ZombieDie(Color color, List<ZombieValue> sides) {
        super(color, sides);
    }

    List<ZombieValue> sides() {
        return sides;
    }
}
 