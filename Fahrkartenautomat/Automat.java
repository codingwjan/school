import java.util.*;
import java.text.DecimalFormat;

public class Automat {

    private static final DecimalFormat df = new DecimalFormat("0.00");

    public static void main(String[] args) {

        int num_of_tickets;
        String choosen_ticket;
        String traincard;
        int age;
        Double inserted_coins;
        Double result = null;
        Scanner input = new Scanner(System.in);

        //choosing options for tickets
        List<String> avalible_buying_options = new ArrayList<>();
        avalible_buying_options.add("a");
        avalible_buying_options.add("b");
        avalible_buying_options.add("c");

        //train card
        List<String> possible_train_card = new ArrayList<>();
        possible_train_card.add("y");
        possible_train_card.add("n");

        //coins
        List<Double> possible_coins = new ArrayList<>();
        possible_coins.add(0.01);
        possible_coins.add(0.02);
        possible_coins.add(0.05);
        possible_coins.add(0.10);
        possible_coins.add(0.20);
        possible_coins.add(0.50);
        possible_coins.add(1.0);
        possible_coins.add(2.0);

        while (true) {
            try {
                // tickets
                System.out.println("welcome to the ticket machine \nwe have 3 different options\nZone A: 2,50 €\nZone B: 3,70 €\nZone C: 5,20 €\n");
                System.out.println("which ticket would you like to buy? a | b | c");
                choosen_ticket = input.next().toLowerCase();

                if (avalible_buying_options.contains(choosen_ticket)) {

                    // number of tickets
                    System.out.println("how many tickets would you like to buy");
                    num_of_tickets = input.nextInt();

                    if (num_of_tickets > 0) {
                        System.out.println("do you have a train card y/n");
                        traincard = input.next().toLowerCase();

                        if (possible_train_card.contains(traincard)) {
                            System.out.println("how old are you: ");
                            age = input.nextInt();

                            switch (choosen_ticket) {

                                case "a":
                                    if (traincard.equals("y")) {
                                        if (age < 18) {
                                            result = (2.50 * (num_of_tickets - (0.2 * num_of_tickets) * 0.5));
                                        } else {
                                            result = (2.50 * (num_of_tickets - (0.2 * num_of_tickets)));
                                        }
                                    } else {
                                        if (age < 18) {
                                            result = ((2.50 * num_of_tickets) * 0.5);
                                        } else {
                                            result = (2.50 * num_of_tickets);
                                        }
                                    }
                                    break;

                                case "b":
                                    if (traincard.equals("y")) {
                                        if (age < 18) {
                                            result = (3.70 * (num_of_tickets - (0.2 * num_of_tickets) * 0.5));
                                        } else {
                                            result = (3.70 * (num_of_tickets - (0.2 * num_of_tickets)));
                                        }
                                    } else {
                                        if (age < 18) {
                                            result = ((3.70 * num_of_tickets) * 0.5);
                                        } else {
                                            result = (3.70 * num_of_tickets);
                                        }
                                    }
                                    break;

                                case "c":
                                    if (traincard.equals("y")) {

                                        if (age < 18) {
                                            result = (5.20 * (num_of_tickets - (0.2 * num_of_tickets) * 0.5));
                                        } else {
                                            result = (5.20 * (num_of_tickets - (0.2 * num_of_tickets)));
                                        }
                                    } else {

                                        if (age < 18) {
                                            result = ((5.20 * num_of_tickets) * 0.5);
                                        } else {
                                            result = (5.20 * num_of_tickets);
                                        }
                                    }
                                    break;
                            }
                            System.out.println("you have to pay " + (df.format(result)) + "€");
                        } else {
                            System.out.println("you have to buy at least 1 ticket");
                        }

                        double Payed_money;
                        Payed_money = 0.0;
                        System.out.println((Payed_money) + (result));
                        while (Payed_money < result) {
                            System.out.print("please insert coins (0,01, 0,02, 0,05, 0,10, 0,20, 0,50, 1,0, 2,0): ");
                            inserted_coins = input.nextDouble();

                            if (possible_coins.contains(inserted_coins)) {
                                Payed_money = (inserted_coins += Payed_money);
                                System.out.println("inserted " + df.format(inserted_coins) + "€");
                                System.out.println("left to pay " + (df.format(result - Payed_money)) + "€");
                            } else {
                                System.out.print("you cant use those coins \n");
                            }
                        }

                        Random random = new Random();
                        if ((Payed_money - result) != 0.0) {
                            System.out.println("you have payed too much, \nthere for you will get a voucher for your next purchase! \nVoucher details:\n    Voucher Value: " + (df.format(Payed_money - result)) + "€ \n    Voucher code: " + (random.nextInt(500)) + "\n");
                        } else {
                            System.out.println("thank you and hava a nice day");
                        }
                        result = 0.0;
                    }
                } else {
                    System.out.println("i think you have entered a wrong letter :( please try again");
                }

            } catch (Exception e) {
                System.out.println("something went wrong... \nplease retry again");
            }
        }
    }
}