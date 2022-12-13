public class chess_generator {
    public static void main(String[] args) {
        String left = "|";
        String middle = "¯";
        String right = "¯|";

        System.out.print("   ");

        System.out.println();

        for (int i = 0; i < 8; i++) {
            System.out.print(i + 1 + " ");
            System.out.print(left);
            for (int j = 0; j < 8; j++) {
                System.out.print(middle);
                System.out.print(right);
            }
            System.out.println();
        }
        System.out.print("   ");
        for (int i = 1; i <= 8; i++) {
            System.out.print(middle);
            System.out.print(middle);
            //space
            System.out.print(" ");
        }
    }
}