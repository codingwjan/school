import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //create new string array with a - z
        String[] alphabet = new String[26];
        for (int i = 0; i < alphabet.length; i++) {
            alphabet[i] = String.valueOf((char) (i + 97));
        }
        //get input
        int input = scanner.nextInt();
        System.out.println("the letter at position " + input + " is " + alphabet[input]);
    }
}