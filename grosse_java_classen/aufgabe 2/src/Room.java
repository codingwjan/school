public class Room {
    boolean isSmokingRoom;
    int roomNumber;

    public Room(boolean isSmokingRoom, int roomNumber) {
        this.isSmokingRoom = isSmokingRoom;
        this.roomNumber = roomNumber;
    }

    public boolean isSmokingRoom() {
        return isSmokingRoom;
    }

    public void setSmokingRoom(boolean smokingRoom) {
        isSmokingRoom = smokingRoom;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public void cRoom() {
        System.out.println("Room " + roomNumber + " is a smoking room: " + isSmokingRoom);
    }

    public void addTable(Table table) {
        System.out.println("Table " + table.getNumber() + " has " + table.getNumberOfChairs() + " chairs.");
    }

    public void deleteTable(Table table) {
        System.out.println("Table " + table.getNumber() + " has been deleted.");
    }
}
