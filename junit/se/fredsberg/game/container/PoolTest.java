package se.fredsberg.game.container;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;

import se.fredsberg.game.random.ReverseScrambler;

public class PoolTest {

    @Test
    public void getCount() {
        assertEquals(0, new Pool<Integer>().getCount());
    }

    @Test
    public void isEmpty() {
        Pool<Integer> pool = new Pool<Integer>();
        assertTrue(pool.isEmpty());
        pool.add(6);
        assertFalse(pool.isEmpty());
    }

    @Test(expected = IllegalArgumentException.class)
    public void add_nullNotAcceptable() {
        Pool<Integer> pool = new Pool<Integer>();
        pool.add(null);
    }

    @Test
    public void add() {
        Pool<Integer> pool = new Pool<Integer>();
        pool.add(6);
        assertEquals(1, pool.getCount());
    }

    @Test
    public void add_checkFifoOrder() {
        Pool<Integer> pool = new Pool<Integer>();
        pool.add(6);
        pool.add(9);
        assertPoolOrder(pool, 6, 9);
    }

    @Test(expected = EmptyException.class)
    public void pickOne_emptyShouldResultInException() {
        Pool<Integer> pool = new Pool<Integer>();
        pool.pickOne();
    }

    @Test
    public void pickOne() {
        Pool<Integer> pool = new Pool<Integer>();
        pool.add(6);
        assertEquals((Integer) 6, pool.pickOne());
    }

    @Test
    public void pickAll_shouldBeEmptyAfterwards() {
        Pool<Integer> pool = new Pool<Integer>();
        pool.add(6);
        List<Integer> all = pool.pickAll();
        assertEquals(1, all.size());
        assertEquals((Integer) 6, all.iterator().next());
        assertTrue(pool.isEmpty());
    }

    @Test
    public void shake_inRevereseOrderWhenReverseScramblerIsUsed() {
        Pool<Integer> pool = new Pool<Integer>();
        pool.add(1);
        pool.add(2);
        pool.shake(new ReverseScrambler());
        assertPoolOrder(pool, 2, 1);
    }

    private void assertPoolOrder(Pool<Integer> pool, int... index) {
        for (int i : index) {
            assertSame(i, pool.pickOne());
        }
    }
}
