import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Checker {
	
	public static boolean checkNameValidity(String password) {
		String regex="^(?! )[A-Z][a-zA-Z ]{0,30}[A-Z][a-zA-Z]{0,30}(?<! )$";

		//Your Code goes here

		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(password);
		return matcher.find();
	}

	public static boolean checkPasswordValidity(String password) {
		String regex="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$";

		//Your Code goes here

		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(password);
		return matcher.find();
	}

}
