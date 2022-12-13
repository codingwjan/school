import java.util.Scanner;

public class ForEach {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("enter your source: ");
        String source = input.nextLine();
        System.out.println(source);

        if (source.charAt(source.length() - 1) == '.') {
            source = source.substring(0, source.length() - 1);
        }

        if (source.charAt(source.length() - 1) == ' ') {
            source = source.substring(0, source.length() - 1);
        }

        System.out.println(source);
        String text = input.nextLine();
        int applecount = 0;
        int tastycount = 0;
        String tastyresult = null;
        for (String word : text.split(" ")) {
            if (word.equals("apple")) {
                applecount++;
            } else if (word.equals("apples")) {
                applecount++;
            } else if (word.equals("delicious")) {
                tastycount++;
            }
        }
            
        if (tastycount == 0) {
            tastyresult = "not tasty";
        } else if (tastycount <= 2) {
            tastyresult = "quite good";
        } else if (tastycount > 2) {
            tastyresult = "absolutely delicious";
        }
        System.out.println("for "+ source + "apple pie, you need "+ applecount + " apples. your pie will be "+ tastyresult);
    }
}

