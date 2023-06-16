package org.example;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        // Instantiate LieferserviceVerwaltung
        LieferserviceVerwaltung lieferserviceVerwaltung = new LieferserviceVerwaltung();
        System.out.println("LieferserviceVerwaltung created.");

        // Instantiate some addresses
        Adresse a1 = new Adresse("Street 1", "12345", "City");
        Adresse a2 = new Adresse("Street 2", "67890", "City");
        System.out.println("Addresses created.");

        // Instantiate some customers
        Kunde k1 = new Kunde("Kund1", "Eins", a1);
        Kunde k2 = new Kunde("Kund2", "Zwei", a2);
        System.out.println("Customers created.");

        // Add customers to LieferserviceVerwaltung
        lieferserviceVerwaltung.addKunde(k1);
        lieferserviceVerwaltung.addKunde(k2);
        System.out.println("Customers added to LieferserviceVerwaltung.");

        // Instantiate a Fahrer
        Fahrer f1 = new Fahrer("Fahrer1", "Eins", "RFID1", 'B');
        System.out.println("Fahrer created.");

        // Instantiate a Fahrzeug
        Fahrzeug fz1 = new Fahrzeug("E-Motorroller", "ABCDE");
        System.out.println("Fahrzeug created.");

        // Instantiate some Bestellungen
        Bestellung b1 = new Bestellung("1234567890", a1, 100);
        Bestellung b2 = new Bestellung("0987654321", a2, 200);
        System.out.println("Bestellungen created.");

        // Instantiate some Lieferauftrags
        Lieferauftrag la1 = new Lieferauftrag(b1, f1, fz1);
        Lieferauftrag la2 = new Lieferauftrag(b2, f1, fz1);
        System.out.println("Lieferauftrags created.");

        // Allow enough time for the orders to be eligible for Gutschrift
        // Please implement this in your own way depending on the implementation details of your classes

        // Check if Kunden are eligible for Gutschrift
        lieferserviceVerwaltung.ermittleGutschrift(b1, k1);
        lieferserviceVerwaltung.ermittleGutschrift(b2, k2);
        System.out.println("ErmittleGutschrift method called for all orders.");

        // Print the result
        System.out.println("Kunde " + k1.getName() + " " + k1.getVorname() + " has Gutschrift: " + k1.getGutschrift());
        System.out.println("Kunde " + k2.getName() + " " + k2.getVorname() + " has Gutschrift: " + k2.getGutschrift());
    }
}
