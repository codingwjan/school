package firstProject.Klassenarbeit;

import java.util.Scanner;

public class NummerEins {
	public static void main(String args[]) {
		
		int input;
		int solution = 0;
		
		System.out.println("Enter a Number:");
		Scanner scan = new Scanner(System.in);
		input = scan.nextInt();
		
		while(input >= 0) {
			
			solution = solution + input;
			
			input--;
			
		}
		System.out.println("Your solution is " + solution + ".");
		scan.close();
	}	
}