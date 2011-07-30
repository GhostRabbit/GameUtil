package se.fredsberg.game.zombiedice;

import static org.junit.Assert.*;

import org.junit.Test;

public class ZombieDicePoolTest {

    @Test
    public void count_shouldBe13() {
        assertEquals(13, new ZombieDicePool().getCount());
    }
}
