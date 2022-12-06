public class chess_generator {
    public static void main(String[] args) {
        String left = "|";
        String middle = "¯";
        String right = "¯|";

        //numbers top
        System.out.print("   ");
        for (int i = 1; i <= 8; i++) {
            System.out.print(i + "  ");
        }

        //break line
        System.out.println();

        //add one left and the rest from middle and right
        for (int i = 0; i < 8; i++) {
            //add number left
            System.out.print(i + 1 + " ");
            System.out.print(left);
            for (int j = 0; j < 8; j++) {
                System.out.print(middle);
                System.out.print(right);
            }
            System.out.println();
        }
        //add bottom line
        System.out.print("   ");
        for (int i = 1; i <= 8; i++) {
            System.out.print(middle);
            System.out.print(middle);
            //space
            System.out.print(" ");
        }
    }
}