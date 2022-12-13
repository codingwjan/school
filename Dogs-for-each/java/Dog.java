package Karst;

public class Dog {
	boolean female;
	int age;
	boolean isBarking;
	String name;

	public Dog(String name, boolean female, int age, boolean isBarking) {
		this.name = name;
		this.female = female;
		this.age = age;
		this.isBarking = isBarking;
	}
	
	@Override
	public String toString() {
		return "\nname: "+ this.name + ", female: " + this.female + ", age: " +  this.age + ", isBarking: " + isBarking;
	}
}
