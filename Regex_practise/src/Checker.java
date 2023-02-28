import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Checker {
	
	public static boolean checkNameValidity(String password) {
		String regex="^(?! )[A-Z][a-zA-Z ]{2,30}[A-Z][a-zA-Z]{2,30}(?<! )$";

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

	public static boolean checkUrlsValidity(String email) {
		String regex="^(http|https):\\/\\/(www\\.)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,3}(:[0-9]{1,5})?(\\/.*)?$";

		//Your Code goes here

		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(email);
		return matcher.find();
	}

	//check product name validity
	public static boolean checkProductNameValidity(String productName) {
		String regex="^[a-zA-Z]+(\\s[a-zA-Z]+){1,2}$";

		//Your Code goes here

		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(productName);
		return matcher.find();
	}

	//product id validity
	public static boolean checkProductIdValidity(String productId) {
		String regex="^[a-zA-Z0-9]{2,20}$";

		//Your Code goes here

		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(productId);
		return matcher.find();
	}

}
