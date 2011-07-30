package se.fredsberg.game.zombiedice;

import se.fredsberg.game.container.Pool;
import se.fredsberg.game.dice.zombie.ZombieDie;
import se.fredsberg.game.dice.zombie.ZombieDieFactory;

public class ZombieDicePool extends Pool<ZombieDie>{

    private static final int RED_DICE_COUNT = 3;
    private static final int YELLOW_DICE_COUNT = 4;
    private static final int GREEN_DICE_COUNT = 6;

    public ZombieDicePool() {
        ZombieDieFactory dieFactory = new ZombieDieFactory();
        for (int i = 0; i < RED_DICE_COUNT; i++) {
            add(dieFactory.redZombieDie());
        }
        for (int i = 0; i < YELLOW_DICE_COUNT; i++) {
            add(dieFactory.yellowZombieDie());
        }
        for (int i = 0; i < GREEN_DICE_COUNT; i++) {
            add(dieFactory.greenZombieDie());
        }
    }
}
