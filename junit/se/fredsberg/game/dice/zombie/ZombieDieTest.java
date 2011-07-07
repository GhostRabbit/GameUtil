package se.fredsberg.game.dice.zombie;

import static org.junit.Assert.*;

import java.awt.Color;

import org.junit.Test;

public class ZombieDieTest {

    @Test
    public void redZombieDie_properties() {
        ZombieDie red = new ZombieDieFactory().redZombieDie();
        assertEquals(Color.RED, red.getColor());
        assertZombieDieSides(red, 1, 3, 2);
    }

    @Test
    public void yellowZombieDie_properties() {
        ZombieDie yellow = new ZombieDieFactory().yellowZombieDie();
        assertEquals(Color.YELLOW, yellow.getColor());
        assertZombieDieSides(yellow, 2, 2, 2);
    }

    @Test
    public void greenZombieDie_properties() {
        ZombieDie green = new ZombieDieFactory().greenZombieDie();
        assertEquals(Color.GREEN, green.getColor());
        assertZombieDieSides(green, 3, 1, 2);
    }

    private void assertZombieDieSides(ZombieDie die, int brains, int shootguns, int footprints) {
        int sides = shootguns + footprints + brains;
        assertEquals(sides + " sides", sides, die.getSize());
        assertEquals(shootguns + " shootguns", shootguns, countValues(die, ZombieValue.SHOOTGUN));
        assertEquals(footprints + " footprints", footprints, countValues(die, ZombieValue.FOOTPRINTS));
        assertEquals(brains + " brains", brains, countValues(die, ZombieValue.BRAIN));
    }

    private int countValues(ZombieDie die, ZombieValue value) {
        int result = 0;
        for (ZombieValue side : die.sides()) {
            if (side == value) {
                result++;
            }
        }
        return result;
    }
}
