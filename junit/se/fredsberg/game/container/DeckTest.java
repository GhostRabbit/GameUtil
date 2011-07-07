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
    public void getCount() {
        Deck<Card> deck = new Deck<Card>();
        assertEquals(0, deck.getCount());
        deck.putOnTop(new Card());
        assertEquals(1, deck.getCount());
    }

    @Test(expected = EmptyException.class)
    public void draw_deckOfOneCanDrawOnlyOnce() throws Exception {
        Deck<Card> deck = new Deck<Card>();
        Card card = new Card();
        deck.putOnTop(card);
        assertSame(card, deck.draw());
        deck.draw();
    }

    @Test(expected = EmptyException.class)
    public void draw_emptyDeckWouldResultInEmptyExceptionIfDrawn() throws Exception {
        Deck<Card> deck = new Deck<Card>();
        deck.draw();
    }

    @Test
    public void isEmpty() {
        Deck<Card> deck = new Deck<Card>();
        assertTrue(deck.isEmpty());
        deck.putOnTop(new Card());
        assertFalse(deck.isEmpty());
    }

    @Test
    public void putBelow_orderOfAnotherDeck() {
        Deck<Card> deck = new Deck<Card>();
        Deck<Card> anotherDeck = new Deck<Card>();
        Card[] cards = newCardArray(4);
        anotherDeck.putOnTop(cards[1]);
        anotherDeck.putOnTop(cards[0]);
        deck.putOnTop(cards[3]);
        deck.putOnTop(cards[2]);
        deck.putBelow(anotherDeck);
        assertEquals(4, deck.getCount());
        assertDeckOrder(deck, cards, 2, 3, 0, 1);
        assertEquals(0, anotherDeck.getCount());
    }

    @Test(expected = IllegalArgumentException.class)
    public void putBelow_deck_nullNotAcceptable() {
        Deck<Card> deck = new Deck<Card>();
        deck.putBelow((Deck<Card>) null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void putBelow_item_nullNotAcceptable() {
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
    public void putOnTop_orderOfAnotherDeck() {
        Deck<Card> deck = new Deck<Card>();
        Deck<Card> anotherDeck = new Deck<Card>();
        Card[] cards = newCardArray(4);
        anotherDeck.putOnTop(cards[1]);
        anotherDeck.putOnTop(cards[0]);
        deck.putOnTop(cards[3]);
        deck.putOnTop(cards[2]);
        deck.putOnTop(anotherDeck);
        assertEquals(4, deck.getCount());
        assertDeckOrder(deck, cards, 0, 1, 2, 3);
        assertEquals(0, anotherDeck.getCount());
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
    public void putOnTop_orderOfTwoItemsAddedOnTop() throws Exception {
        Deck<Card> deck = new Deck<Card>();
        Card[] cards = newCardArray(2);
        deck.putOnTop(cards[0]);
        deck.putOnTop(cards[1]);
        assertDeckOrder(deck, cards, 1, 0);
    }

    @Test
    public void shuffle_inReverseOrderAfterRevereScrambling() {
        Deck<Card> deck = new Deck<Card>();
        Card[] cards = newCardArray(2);
        deck.putOnTop(cards[0]);
        deck.putOnTop(cards[1]);
        deck.shuffle(new ReverseScrambler());
        assertDeckOrder(deck, cards, 0, 1);
    }

    @Test
    public void shake_doesNothing() {
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
