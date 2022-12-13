package Karst;

import java.util.ArrayList;
import java.util.concurrent.ThreadLocalRandom;

public class TestDogs {

	static String[] names = {
			"Shakespeare",
			"Shaki",
			"Shakira",
			"Shakka",
			"Shakur",
			"Shaky",
			"Shakyra",
			"Shalimar",
			"Shally",
			"Shaman",
			"Shamira",
			"Shan",
			"Shana",
			"Shandor",
			"Shandra",
			"Shandy",
			"Shane",
			"Shani",
			"Shania",
			"Shanna",
			"Shannah",
			"Shannen",
			"Shannon",
			"Shanny",
			"Shanon",
			"Shanti",
			"Shanty",
			"Shany",
			"Shara",
			"Sharan",
			"Sharek",
			"Shari",
			"Sharie",
			"Sharif"
	};

	public static void main(String[] args) {
		ArrayList<Dog> dogList = generateDogList();
		//Aufgabe1
		System.out.println("Aufgabe 1");
		String newdogList = dogList.toString();
		//remove the first and last character
		newdogList = newdogList.substring(1, newdogList.length()-1);
		System.out.println(newdogList);

		//Aufgabe2
		System.out.println("\n");
		System.out.println("Aufgabe 2");
		ArrayList<Dog> olderDogs = filterYoungDogs(dogList);
		//remove brackets
		String olderDogsString = olderDogs.toString();
		olderDogsString = olderDogsString.substring(1, olderDogsString.length()-1);
		System.out.println(olderDogsString);


		//Aufgabe3
		System.out.println("\n");
		System.out.println("Aufgabe 3");
		ArrayList<Dog> youngDogs = collectYoungDogs(dogList);
		//remove brackets
		String youngDogsString = youngDogs.toString();
		youngDogsString = youngDogsString.substring(1, youngDogsString.length()-1);

		if (youngDogsString.length() == 0) {
			System.out.println("No young dogs");
		} else {
			System.out.println(youngDogsString);
		}

		//Aufgabe4
		System.out.println("\n");
		System.out.println("Aufgabe 4");
		ArrayList<Dog> allDogs = combineLists(olderDogs, youngDogs);
		System.out.println("Barking dogs: " + countBarkingDogs(allDogs));

	}

	public static ArrayList<Dog> generateDogList() {
		ArrayList<Dog> result = new ArrayList<Dog>();

		for (int i = 0; i < ThreadLocalRandom.current().nextInt(20, 30); i++) {
			String randomName = names[ThreadLocalRandom.current().nextInt(0, names.length)];
			Dog tmp = (new Dog(randomName, ThreadLocalRandom.current().nextBoolean(), ThreadLocalRandom.current().nextInt(1, 10), ThreadLocalRandom.current().nextBoolean()));
			result.add(tmp);
		}

		return result;
	}

	public static ArrayList<Dog> filterYoungDogs(ArrayList<Dog> dogList) {
		ArrayList<Dog> result = new ArrayList<Dog>();
		for (Dog dog : dogList) {
			if (dog.age >= 2) {
				result.add(dog);
			}
		}
		return result;
	}

	public static ArrayList<Dog> collectYoungDogs(ArrayList<Dog> dogList) {
		ArrayList<Dog> result = new ArrayList<Dog>();
		for (Dog dog : dogList) {
			if (dog.age < 2) {
				result.add(dog);
			}
		}
		return result;
	}
	
	public static int countBarkingDogs(ArrayList<Dog> inputList) {
		int result = 0;

		for (Dog dog : inputList) {
			if (dog.isBarking) {
				result++;
			}
		}
		
		return result;
	}

	public static ArrayList<Dog> combineLists(ArrayList<Dog> inputListOne, ArrayList<Dog> inputListTwo){
		ArrayList<Dog> result = new ArrayList<Dog>();

		//combine both lists
		result.addAll(inputListOne);

		for (Dog dog : inputListTwo) {
			if (!result.contains(dog)) {
				result.add(dog);
			}
		}

		return result;
	}
}
