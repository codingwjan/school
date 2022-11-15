import java.util.Scanner;

public class bank {

    public static void main(String[] args) {

        double moneyinaccount;
        int pin;
        double amount;
        String paylater;
        int paylatertimespan;
        int totalpintrys;

        totalpintrys = 2;

        try {

            Scanner input = new Scanner(System.in);

            // welcome
            System.out.println("hello and welcome to the secure server of the bank");
            System.out.println("how much money do you have?");
            moneyinaccount = input.nextDouble();
            System.out.println("please type in you secure pin");

            // pin
            while (totalpintrys >= 0) {
                pin = input.nextInt();

                if (pin == 1234) {
                    System.out.println("pin correct!");
                    System.out.println("please enter your amount");
                    amount = input.nextDouble();

                    if (amount > moneyinaccount) {
                        System.out.println("you dont have enough money");
                        System.exit(0);

                    }

                    else {

                        if (amount > 1000) {
                            System.out.println(
                                    "the amount is over the limit of 1000€ \n do you want to pay later? \n yes / no");
                            paylater = input.next();

                            if (paylater.contains("y")) {
                                System.out.println("over how many moths do you want to pay?");
                                paylatertimespan = input.nextInt();
                                System.out
                                        .println("you have to pay a total amount of " + amount + "€ over a timespan of "
                                                + paylatertimespan + " months! each month you will be paying "
                                                + (amount / paylatertimespan) + "€");
                                System.exit(0);
                            }

                            else {
                                System.out.println("ok then earn more money");
                                System.exit(0);
                            }
                        }

                        else {
                            System.out.println("transaction successful");
                            System.out.println("you now have " + (moneyinaccount - amount) + "€ in your account");
                            System.exit(0);
                        }
                    }
                }

                else if (totalpintrys >= 1) {
                    System.out.println("wrong pin \n you have " + totalpintrys + " trys left");
                    System.out.println("try again");
                    totalpintrys = (totalpintrys - 1);
                }

                else if (totalpintrys == 0) {
                    totalpintrys = (totalpintrys - 1);
                    System.out.println("2 wochen timeout wegen hausmodifikationen");
                    System.exit(0);
                }
            }

        } catch (Exception e) {
            System.out.println("something went terribly wrong");
            System.exit(0);
        }
    }
}