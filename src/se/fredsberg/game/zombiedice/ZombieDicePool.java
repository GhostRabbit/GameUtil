package se.fredsberg.game.zombiedice;

import se.fredsberg.game.container.Pool;
import se.fredsberg.game.dice.zombie.ZombieDie;
import se.fredsberg.game.dice.zombie.ZombieDieFactory;

public class ZombieDicePool extends Pool<ZombieDie>{

    public ZombieDicePool() {
        ZombieDieFactory dieFactory = new ZombieDieFactory();
        for (int i = 0; i < 3; i++) {
            add(dieFactory.redZombieDie());
        }
        for (int i = 0; i < 4; i++) {
            add(dieFactory.yellowZombieDie());
        }
        for (int i = 0; i < 5; i++) {
            add(dieFactory.greenZombieDie());
        }
    }
}
