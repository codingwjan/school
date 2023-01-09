import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String userInput = input.nextLine().toLowerCase();
        String [] userInputArray = userInput.split("");

        for (int n = 0; n < userInputArray.length/2; n++) {
            if (!userInputArray[n].equals(userInputArray.length-n-1)) {
                System.out.println("doesn't work");
                System.exit(0);
            }
        }
        System.out.println("It works!!!");
    }
}