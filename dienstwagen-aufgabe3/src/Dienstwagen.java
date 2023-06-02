import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Dienstwagen {
    private String kennzeichen;
    private String hersteller;
    private String farbe;
    private List<Mitarbeiter> fahrerListe;
    private List<Fahrt> fahrtenbuch;

    public Dienstwagen(String kennzeichen, String hersteller, String farbe) {
        this.kennzeichen = kennzeichen;
        this.hersteller = hersteller;
        this.farbe = farbe;
        this.fahrerListe = new ArrayList<>();
        this.fahrtenbuch = new ArrayList<>();
    }

    public void addFahrer(Mitarbeiter mitarbeiter) {
        if (!this.fahrerListe.contains(mitarbeiter)) {
            this.fahrerListe.add(mitarbeiter);
        }
    }

    public void addFahrt(Date datum, Mitarbeiter mitarbeiter, int kmStart, int kmEnde, boolean dienstlich) {
        this.fahrtenbuch.add(new Fahrt(datum, mitarbeiter, kmStart, kmEnde, dienstlich));
    }

    public List<Mitarbeiter> getFahrerListe() {
        return fahrerListe;
    }

    public List<Fahrt> getFahrtenbuch() {
        return fahrtenbuch;
    }

    @Override
    public String toString() {
        return hersteller + ", " + kennzeichen + ", " + farbe;
    }
}
