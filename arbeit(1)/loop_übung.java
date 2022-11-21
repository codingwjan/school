import java.util.Scanner;

public class loop_übung {
	public static void main(String args[]) {
		boolean t = true;
		while(t == true){
		dings();
		}
	}	
	public static void dings(){
		
		Scanner input = new Scanner( System.in );
		String message;
		message = input.nextLine();
		if(message.equals("hello world")) {
			System.out.println(message + " does not contain hello world and therefor is false");
		}else{
			System.out.println(message + " does not contain hello world and therefor is false");
		}
	}

}