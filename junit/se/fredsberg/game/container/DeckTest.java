package se.fredsberg.game.container;

import static org.junit.Assert.*;

import org.junit.Test;

import se.fredsberg.game.card.Card;
import se.fredsberg.game.card.NumberedCard;
import se.fredsberg.game.container.Deck;
import se.fredsberg.game.container.EmptyException;
import se.fredsberg.game.random.ReverseScrambler;

public class DeckTest {

    @Test
    public void count() {
        Deck<Card> deck = new Deck<Card>();
        assertEquals(0, deck.count());
        deck.putOnTop(new Card());
        assertEquals(1, deck.count());
    }

    @Test(expected = EmptyException.class)
    public void draw_deckOfOneCanDrawOnce() throws Exception {
        Deck<Card> deck = new Deck<Card>();
        Card card = new Card();
        deck.putOnTop(card);
        assertSame(card, deck.draw());
        deck.draw();
    }

    @Test(expected = EmptyException.class)
    public void draw_emptyDeckWouldResultInEmptyException() throws Exception {
        Deck<Card> deck = new Deck<Card>();
        deck.draw();
    }

    @Test
    public void empty() {
        Deck<Card> deck = new Deck<Card>();
        assertTrue(deck.empty());
        deck.putOnTop(new Card());
        assertFalse(deck.empty());
    }

    @Test
    public void putBelow_anotherDeck() {
        Deck<Card> deck = new Deck<Card>();
        Deck<Card> anotherDeck = new Deck<Card>();
        Card[] cards = newCardArray(4);
        anotherDeck.putOnTop(cards[1]);
        anotherDeck.putOnTop(cards[0]);
        deck.putOnTop(cards[3]);
        deck.putOnTop(cards[2]);
        deck.putBelow(anotherDeck);
        assertEquals(4, deck.count());
        assertDeckOrder(deck, cards, 2, 3, 0, 1);
        assertEquals(0, anotherDeck.count());
    }

    @Test(expected = IllegalArgumentException.class)
    public void putBelow_deck_NullNotAcceptable() {
        Deck<Card> deck = new Deck<Card>();
        deck.putBelow((Deck<Card>) null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void putBelow_item_NullNotAcceptable() {
        Deck<Card> deck = new Deck<Card>();
        deck.putBelow((Card) null);
    }

    @Test
    public void putBelow_orderOfTwoItems() {
        Deck<Card> deck = new Deck<Card>();
        Card[] cards = newCardArray(2);
        deck.putOnTop(cards[0]);
        deck.putBelow(cards[1]);
        assertSame(cards[0], deck.draw());
        assertSame(cards[1], deck.draw());
    }

    @Test
    public void putOnTop_anotherDeck() {
        Deck<Card> deck = new Deck<Card>();
        Deck<Card> anotherDeck = new Deck<Card>();
        Card[] cards = newCardArray(4);
        anotherDeck.putOnTop(cards[1]);
        anotherDeck.putOnTop(cards[0]);
        deck.putOnTop(cards[3]);
        deck.putOnTop(cards[2]);
        deck.putOnTop(anotherDeck);
        assertEquals(4, deck.count());
        assertDeckOrder(deck, cards, 0, 1, 2, 3);
        assertEquals(0, anotherDeck.count());
    }

    @Test(expected = IllegalArgumentException.class)
    public void putOnTop_deck_NullNotAcceptable() {
        Deck<Card> deck = new Deck<Card>();
        deck.putOnTop((Deck<Card>) null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void putOnTop_item_NullNotAcceptable() {
        Deck<Card> deck = new Deck<Card>();
        deck.putOnTop((Card) null);
    }

    @Test
    public void putOnTop_orderOfTwoItems() throws Exception {
        Deck<Card> deck = new Deck<Card>();
        Card[] cards = newCardArray(2);
        deck.putOnTop(cards[0]);
        deck.putOnTop(cards[1]);
        assertDeckOrder(deck, cards, 1, 0);
    }
    
    @Test
    public void shuffle() {
        Deck<Card> deck = new Deck<Card>();
        Card[] cards = newCardArray(2);
        deck.putOnTop(cards[0]);
        deck.putOnTop(cards[1]);
        deck.shuffle(new ReverseScrambler());
        assertDeckOrder(deck, cards, 0, 1);
    }

    @Test
    public void shake() {
        Deck<Card> deck = new Deck<Card>();
        Card[] cards = newCardArray(2);
        deck.putOnTop(cards[0]);
        deck.putOnTop(cards[1]);
        deck.shake(new ReverseScrambler());
        assertDeckOrder(deck, cards, 1, 0);
    }

    private void assertDeckOrder(Deck<Card> deck, Card[] cards, int... index) {
        for (int i : index) {
            assertSame(cards[i], deck.draw());
        }
    }

    private Card[] newCardArray(int count) {
        Card[] cards = new Card[count];
        for (int i = 0; i < cards.length; i++) {
            cards[i] = new NumberedCard(i);
        }
        return cards;
    }

}
