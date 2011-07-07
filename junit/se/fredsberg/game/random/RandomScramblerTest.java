package se.fredsberg.game.random;

import static org.junit.Assert.*;

import org.junit.Test;

public class RandomScramblerTest {

    @Test
    public void random_checkBounderies() {
        // Quite a bad test due to randomness but chances for random failure is less then nothing
        Scrambler scrambler = new RandomScrambler();
        int[] results = new int[3];
        for (int i = 0; i < 100; i++) {
            results[scrambler.random(2)]++;
        }
        assertTrue(results[0] > 0);
        assertTrue(results[1] > 0);
        assertEquals(0, results[2]);
    }
    
}
