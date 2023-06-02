import java.util.ArrayList;

public class Restaurant {
    private ArrayList<Room> rooms = new ArrayList<Room>();

    Room room = new Room(true, 1);
    Table table = new Table(4, 1);

    public void addRoom(Room room) {
        rooms.add(room);
    }
    public void deleteRoom(Room room) {
        rooms.remove(room);
    }
    public void createTestObject() {
        rooms.add(room);
        room.addTable(table);
    }
    public void deleteTestObject() {
        rooms.remove(room);
        room.deleteTable(table);
    }
    public void searchRoom(int roomNumber) {
        for (Room room : rooms) {
            if (room.getRoomNumber() == roomNumber) {
                System.out.println("Room " + roomNumber + " is a smoking room: " + room.isSmokingRoom());
            }
        }
    }
}