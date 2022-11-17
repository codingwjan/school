package career.Flugzeug;

public class Main {

        public static void main(String[] args) {
            Verkehrsflugzeug verkehrsflugzeug = new Verkehrsflugzeug("Boeing", 800, 300, "D-ABCD");
            Doppeldecker doppeldecker = new Doppeldecker("Airbus", "D-ABCE", 400, 100, true, 500, true);

            System.out.println("Verkehrsflugzeug:");
            System.out.println("Hersteller: " + verkehrsflugzeug.getHersteller());
            System.out.println("Max. Geschwindigkeit: " + verkehrsflugzeug.getMaxSpeed());
            System.out.println("Max. Passagiere: " + verkehrsflugzeug.getMaxPassagiere());
            System.out.println("Immatrikulationsnummer: " + verkehrsflugzeug.getImmatNummer());
            System.out.println("Looping möglich: " + verkehrsflugzeug.getLooping());
            System.out.println("Anzahl Flügelpaare: " + verkehrsflugzeug.getAnzahlFluegel());
            System.out.println("Open Top: " + verkehrsflugzeug.offenesCockpit());
            System.out.println();

            System.out.println("Doppeldecker:");
            System.out.println("Hersteller: " + doppeldecker.getHersteller());
            System.out.println("Max. Geschwindigkeit: " + doppeldecker.getMaxSpeed());
            System.out.println("Max. Passagiere: " + doppeldecker.getMaxPassagiere());
            System.out.println("Immatrikulationsnummer: " + doppeldecker.getImmatNummer());
            System.out.println("Looping möglich: " + doppeldecker.getLooping());
            System.out.println("Anzahl Flügelpaare: " + doppeldecker.getAnzahlFluegel());
            System.out.println("Offenes Cockpit: " + doppeldecker.offenesCockpit());
        }
}
