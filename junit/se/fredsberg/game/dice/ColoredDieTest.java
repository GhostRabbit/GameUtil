package se.fredsberg.game.dice;

import static org.junit.Assert.*;

import java.awt.Color;
import java.util.Collections;

import org.junit.Test;

public class ColoredDieTest {
    
    @Test
    public void getColor() {
        Color red = Color.RED;
        ColoredDie<Integer> die = new ColoredDie<Integer>(red, Collections.singletonList(1));
        assertEquals(red, die.getColor());
    }
}
