import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner( System.in );

        int targetValue = input.nextInt();
        int value1 = 0;
        int value2 = 1;
        System.out.println(value2);

        for (int n = 0; n<=targetValue; n++) {
            value1 = value2 - value1;
            value2 = value1 + value2;
            System.out.println(value2);

        }


    }
}