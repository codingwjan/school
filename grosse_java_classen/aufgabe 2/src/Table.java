public class Table {
    int numberOfChairs;
    int Number;

    public Table(int numberOfChairs, int number) {
        this.numberOfChairs = numberOfChairs;
        Number = number;
    }

    public int getNumberOfChairs() {
        return numberOfChairs;
    }

    public void setNumberOfChairs(int numberOfChairs) {
        this.numberOfChairs = numberOfChairs;
    }

    public int getNumber() {
        return Number;
    }

    public void setNumber(int number) {
        Number = number;
    }

    public void cTable() {
        System.out.println("Table " + Number + " has " + numberOfChairs + " chairs.");
    }
}
