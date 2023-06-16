package org.example;
import java.time.LocalDateTime;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

class Kunde {
    private String name;
    private String vorname;
    private Adresse adresse;
    private boolean gutschrift;

    public Kunde(String name, String vorname, Adresse adresse) {
        this.name = name;
        this.vorname = vorname;
        this.adresse = adresse;
        this.gutschrift = false;
    }

    public void setGutschrift(boolean gutschrift) {
        this.gutschrift = gutschrift;
    }

    public String getName() {
        return name;
    }

    public String getVorname() {
        return vorname;
    }

    public String getGutschrift() {
        return gutschrift ? "Ja" : "Nein";
    }
}

class Adresse {
    private String strasseHausnr;
    private String plz;
    private String ort;

    public Adresse(String sh, String plz, String ort) {
        this.strasseHausnr = sh;
        this.plz = plz;
        this.ort = ort;
    }
}

class Fahrer {
    private static int autowert = 0;
    private int fahrernr;
    private String vorname;
    private String nachname;
    private String rfidKennung;
    private char fuehrerscheinklasse;
    private boolean arbeitet;
    private boolean aufTour;

    public Fahrer(String vn, String nn, String rfid, char fk) {
        this.fahrernr = ++autowert;
        this.vorname = vn;
        this.nachname = nn;
        this.rfidKennung = rfid;
        this.fuehrerscheinklasse = fk;
        this.arbeitet = true;
        this.aufTour = false;
    }
}

class Bestellung {
    private static int autowert = 0;
    private int bestellnr;
    private LocalDateTime bestellEingang;
    private String telefon;
    private double gesamtpreis;

    public Bestellung(String tel, Adresse lieferadresse, double gesamtpreis) {
        this.bestellnr = ++autowert;
        this.bestellEingang = LocalDateTime.now();
        this.telefon = tel;
        this.gesamtpreis = gesamtpreis;
    }

    public LocalDateTime getAusgeliefert() {
        return LocalDateTime.now();
    }

    public LocalDateTime getBestellEingang() {
        return bestellEingang;
    }
}

class Lieferauftrag {
    private LocalDateTime start;
    private LocalDateTime ausgeliefert;
    private LocalDateTime ende;

    public Lieferauftrag(Bestellung bestellung, Fahrer f, Fahrzeug fz) {
        this.start = LocalDateTime.now();
    }
}

class Fahrzeug {
    private String Kennzeichen;
    private String typ;
    private boolean frei;

    public Fahrzeug(String typ, String kennzeichen) {
        this.typ = typ;
        this.Kennzeichen = kennzeichen;
        this.frei = true;
    }
}

class Wartezeit {
    private LocalDateTime start;
    private LocalDateTime ende;

    public Wartezeit() {
        this.start = LocalDateTime.now();
    }
}

class LieferserviceVerwaltung {
    private double gutschriftHoehe = 3;
    private List<Kunde> kundenListe = new ArrayList<>();

    public void ermittleGutschrift(Bestellung bestellung, Kunde kunde) {
        LocalDateTime bestellEingang = bestellung.getBestellEingang();
        LocalDateTime ausgeliefert = bestellung.getAusgeliefert();

        Duration duration = Duration.between(bestellEingang, ausgeliefert);
        long diff = Math.abs(duration.toMinutes());

        if (diff > 45) {
            kunde.setGutschrift(true);
        }
    }

    public void addKunde(Kunde kunde) {
        kundenListe.add(kunde);
    }
}

