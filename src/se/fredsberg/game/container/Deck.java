package se.fredsberg.game.container;

import se.fredsberg.game.random.Scrambler;

public class Deck<T> extends Pool<T> {

    public T draw() throws EmptyException {
        return pickOne();
    }

    public void putBelow(Pool<T> another) {
        assertNotNull(another);
        list.addAll(another.list);
        another.list.clear();
    }

    public void putBelow(T item) {
        add(item);
    }

    public void putOnTop(Pool<T> another) {
        assertNotNull(another);
        list.addAll(0, another.list);
        another.list.clear();
    }

    public void putOnTop(T item) {
        assertNotNull(item);
        list.add(0, item);
    }

    public void shuffle(Scrambler scrambler) {
        super.shake(scrambler);
    }
    
    @Override
    public void shake(Scrambler scrambler) {
        // Shaking a deck does nothing
        // Also known as a Norwegian shuffle 
    }

}
