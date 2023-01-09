import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter how tall the tree should be:");
        int n= scanner.nextInt();
            for (int i = 0; i < n; i++) {
                System.out.print(" ");
            }
            String star = "\uDBC0\uDEC3";
            //make star red
            System.out.println("\u001B[31m" + star);

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n - i; j++) {
                    System.out.print(" ");
                }
                //print green slash
                System.out.print("\u001B[32m" + "/");
                for (int j = 0; j < 2 * i + 1; j++) {
                    //add random ' between the stars
                    if (j % 2 == 0) {
                        System.out.print("\u001B[32m" + "*");
                    } else {
                        System.out.print("\u001B[37m" + "'");
                    }
                }
                System.out.println("\\");

                for (int j = 0; j < n - i; j++) {
                    System.out.print(" ");
                }
                //print green slash
                System.out.print("\u001B[32m" + "/");
                for (int j = 0; j < 2 * i + 1; j++) {
                    System.out.print("*");
                }
                System.out.println("\\");
            }

            //change color to brown
            System.out.print("\u001B[33m");

            if (n > 0 && n < 12) {
                for (int i = 0; i < n; i++) {
                    System.out.print(" ");
                }
                System.out.println("\uDBC0\uDC93");
            } else if (n >= 12 && n < 20) {
                for (int i = 0; i < n; i++) {
                    System.out.print(" ");
                }
                System.out.println("\uDBC0\uDC93" + "\uDBC0\uDC93");
            } else {
                for (int i = 0; i < n; i++) {
                    System.out.println(" ");
                }
                System.out.println("\uDBC0\uDC93" + "\uDBC0\uDC93" + "\uDBC0\uDC93");

        }
    }
}