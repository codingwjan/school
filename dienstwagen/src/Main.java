public class Main {
    public static void main(String[] args) {
        Dienstwagen auto1 = new Dienstwagen("UL-FE 1234", "Audi", "blau", null);
        Dienstwagen auto2 = new Dienstwagen("BC-FE 4321", "BMW", "gelb", null);
        Dienstwagen auto3 = new Dienstwagen("S - HE 1122", "Mercedes", "rot", null);

        Mitarbeiter mitarbeiter1 = new Mitarbeiter("Fesch", "Uwe", auto1);
        Mitarbeiter mitarbeiter2 = new Mitarbeiter("Fent", "Kurt", auto2);
        Mitarbeiter mitarbeiter3 = new Mitarbeiter("Heart", "Ralf", auto3);

        auto1.setSeinFahrer(mitarbeiter1);
        auto2.setSeinFahrer(mitarbeiter2);
        auto3.setSeinFahrer(mitarbeiter3);

        System.out.println("Mitarbeiter fährt mit Dienstwagen");
        System.out.println("- - - - - - - - -");
        System.out.println(mitarbeiter1);
        System.out.println(mitarbeiter2);
        System.out.println(mitarbeiter3);
        System.out.println(" ");
        System.out.println("Dienstwagen wird gefahren von Mitarbeiter");
        System.out.println("- - - - - - - - -");
        System.out.println(auto1);
        System.out.println(auto2);
        System.out.println(auto3);
    }
}