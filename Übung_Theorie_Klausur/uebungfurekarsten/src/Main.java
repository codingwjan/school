public class Main {
    public static void main(String[] args) {
        String cock = "hihd";
        StringBuilder sb = new StringBuilder(cock);
        sb.reverse();
        String reveresed = sb.toString();
        System.out.println(reveresed);
        if (cock.equals(reveresed)) {
            System.out.println("gleich");
        } else {
            System.out.println("is nicht gleich");
        }
    }
}