package se.fredsberg.game.dice.zombie;

import java.awt.Color;
import java.util.LinkedList;
import java.util.List;

public class ZombieDieFactory {

    public ZombieDie redZombieDie() {
        return new ZombieDie(Color.RED, getRedZombieSides());
    }

    public ZombieDie yellowZombieDie() {
        return new ZombieDie(Color.YELLOW, getYellowZombieSides());
    }

    public ZombieDie greenZombieDie() {
        return new ZombieDie(Color.GREEN, getGreenZombieSides());
    }

    private List<ZombieValue> getRedZombieSides() {
        return getZombieSides(1, 2, 3);
    }

    private List<ZombieValue> getYellowZombieSides() {
        return getZombieSides(2, 2, 2);
    }

    private List<ZombieValue> getGreenZombieSides() {
        return getZombieSides(3, 2, 1);
    }

    private List<ZombieValue> getZombieSides(int brains, int feet, int shoot) {
        List<ZombieValue> sides = new LinkedList<ZombieValue>();
        addZombieValues(sides, brains, feet, shoot);
        return sides;
    }

    private void addZombieValues(List<ZombieValue> sides, int brains, int feet, int shoot) {
        addZombieValue(sides, brains, ZombieValue.BRAIN);
        addZombieValue(sides, feet, ZombieValue.FOOTPRINTS);
        addZombieValue(sides, shoot, ZombieValue.SHOOTGUN);
    }

    private void addZombieValue(List<ZombieValue> sides, int count, ZombieValue value) {
        for (int i = 0; i < count; i++) {
            sides.add(value);
        }
    }
}
