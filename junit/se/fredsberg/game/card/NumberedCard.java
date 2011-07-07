package se.fredsberg.game.card;


public class NumberedCard extends Card {

    private final int number;

    public NumberedCard(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "C:" + number;
    }
}
