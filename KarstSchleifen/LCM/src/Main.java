import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Find the least common multiple (LCM) of two positive integers
        Scanner input = new Scanner(System.in);

        int num1 = input.nextInt();
        int num2 = input.nextInt();
        int x = Math.max(num1, num2);

        do {
            if (x % num1 == 0 && x % num2 == 0) {
                break;
            } else {
                x += Math.max(num1, num2);
            }
        } while (true);

        System.out.println("The LCM of " + num1 + " and " + num2 + " is " + x);
    }
}