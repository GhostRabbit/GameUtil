package se.fredsberg.game.dice;


public class IntegerDie extends AbstractDie<Integer> {

    private Integer size;

    public IntegerDie(Integer sideCount) {
        this.size = sideCount;
    }

    @Override
    public Integer getResult() {
        return selectedSide() + 1;
    }

    @Override
    public int getSize() {
        return size;
    }
}
