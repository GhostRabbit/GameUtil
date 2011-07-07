package se.fredsberg.game.container;

import java.util.LinkedList;
import java.util.List;

import se.fredsberg.game.random.Scrambler;

public class Pool<T> {

    protected List<T> list;

    public Pool() {
       this.list = new LinkedList<T>();
   }

    public void add(T x) {
        assertNotNull(x);
        list.add(x);
    }

    public int getCount() {
        return list.size();
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }

    public List<T> pickAll() {
        List<T> result = list;
        list = new LinkedList<T>();
        return result;
    }

    public T pickOne() throws EmptyException {
        assertNotEmpty();
        return list.remove(0);
    }

    public void shake(Scrambler scrambler) {
        scrambler.scramble(list);
    }

    private void assertNotEmpty() {
        if (list.isEmpty()) {
            throw new EmptyException();
        }
    }

    protected void assertNotNull(Object item) {
        if (item == null) {
            throw new IllegalArgumentException("null not accepted");
        }
    }
    

}
