import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("Please enter the file size in MB");
        var fileSize = scanner.nextInt();
        System.out.println("Please enter the transfer speed in MB/s");
        var transferSpeed = scanner.nextInt();

        var time = fileSize / transferSpeed;
        if (time >= 60) {
            var minutes = time / 60;
            var seconds = time % 60;
            System.out.println("The file will be transferred in " + minutes + " minutes and " + seconds + " seconds");
        } else if (time < 60) {
            System.out.println("The file will be transferred in " + time + " seconds");
        }
    }
}