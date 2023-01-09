import java.util.Scanner;
public class Main {

    public static int factorial(int targetValue) {

        if (targetValue == 1) {
            return 1;
        }
        return targetValue * factorial(targetValue-1);

    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int targetValue = input.nextInt();
        int result = factorial(targetValue);
        System.out.println(result);
    }
}