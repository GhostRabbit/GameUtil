package se.fredsberg.game.container;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;

import se.fredsberg.game.random.ReverseScrambler;

public class PoolTest {

    @Test
    public void count() {
        assertEquals(0, new Pool<Integer>().count());
    }

    @Test
    public void empty() {
        Pool<Integer> pool = new Pool<Integer>();
        assertTrue(pool.empty());
        pool.add(6);
        assertFalse(pool.empty());
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
        assertEquals(1, pool.count());
    }

    @Test
    public void add_checkTheOrder() {
        Pool<Integer> pool = new Pool<Integer>();
        pool.add(6);
        pool.add(9);
        assertEquals((Integer) 6, pool.pickOne());
        assertEquals((Integer) 9, pool.pickOne());
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
    public void pickOneAll() {
        Pool<Integer> pool = new Pool<Integer>();
        pool.add(6);
        List<Integer> all = pool.pickAll();
        assertEquals(1, all.size());
        assertEquals((Integer) 6, all.iterator().next());
        assertEquals(0, pool.count());
    }

    @Test
    public void shake() {
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
