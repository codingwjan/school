import java.text.SimpleDateFormat;
import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Dienstwagen auto1 = new Dienstwagen("UL-FE 1234", "Audi", "blau");
        Dienstwagen auto2 = new Dienstwagen("BC-FE 4321", "BMW", "gelb");
        Dienstwagen auto3 = new Dienstwagen("S - HE 1122", "Mercedes", "rot");

        Mitarbeiter mitarbeiter1 = new Mitarbeiter("Fesch", "Uwe");
        Mitarbeiter mitarbeiter2 = new Mitarbeiter("Fent", "Kurt");
        Mitarbeiter mitarbeiter3 = new Mitarbeiter("Heart", "Ralf");
        Mitarbeiter mitarbeiter4 = new Mitarbeiter("Quick", "Anne");
        Mitarbeiter mitarbeiter5 = new Mitarbeiter("Tuk", "Fatma");

        mitarbeiter1.addAuto(auto1);
        mitarbeiter2.addAuto(auto2);
        mitarbeiter3.addAuto(auto3);
        mitarbeiter4.addAuto(auto2);
        mitarbeiter5.addAuto(auto3);

        // Add some trips
        auto1.addFahrt(new Date(), mitarbeiter1, 5000, 5100, true);
        auto2.addFahrt(new Date(), mitarbeiter2, 6000, 6150, false);
        auto3.addFahrt(new Date(), mitarbeiter3, 7000, 7050, true);

        Mitarbeiter[] mitarbeiterListe = {mitarbeiter1, mitarbeiter2, mitarbeiter3, mitarbeiter4, mitarbeiter5};
        Dienstwagen[] autoListe = {auto1, auto2, auto3};

        for (Mitarbeiter mitarbeiter : mitarbeiterListe) {
            System.out.println("Mitarbeiter: " + mitarbeiter);
            System.out.println("Dienstwagen:");
            for (Dienstwagen auto : mitarbeiter.getSeineAutos()) {
                System.out.println("\t" + auto);
            }
            System.out.println();
        }

        // Fahrtenbuch für jedes Auto ausgeben
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");
        for (Dienstwagen auto : autoListe) {
            System.out.println("Fahrtenbuch für das Auto: " + auto);
            for (Fahrt fahrt : auto.getFahrtenbuch()) {
                System.out.println("\tDatum: " + dateFormat.format(fahrt.getDatum()) +
                        ", Mitarbeiter: " + fahrt.getMitarbeiter() +
                        ", Km Start: " + fahrt.getKmStart() +
                        ", Km Ende: " + fahrt.getKmEnde() +
                        ", Dienstlich: " + (fahrt.isDienstlich() ? "Ja" : "Nein"));
            }
            System.out.println();
        }
    }
}
