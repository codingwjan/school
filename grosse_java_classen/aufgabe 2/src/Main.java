// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        //create new Restaurant
        Restaurant restaurant = new Restaurant();
        //create new Room
        Room room = new Room(true, 1);
        //create new Table
        Table table = new Table(4, 1);
        //add Room to Restaurant
        restaurant.addRoom(room);
        //add Table to Room
        room.addTable(table);
        //search for Room
        restaurant.searchRoom(1);
        //delete Table from Room
        room.deleteTable(table);
        //delete Room from Restaurant
        restaurant.deleteRoom(room);
    }
}