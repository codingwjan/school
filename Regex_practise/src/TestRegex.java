import java.util.Scanner;

public class TestRegex {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		boolean running = true;
		while (running) {
			String tmp = input.nextLine();
			if (tmp.equals("exit")) {
				System.out.println("Testen beendet");
				running = false;
			}
			System.out.println(Checker.checkProductIdValidity(tmp));
		}

	}

}
