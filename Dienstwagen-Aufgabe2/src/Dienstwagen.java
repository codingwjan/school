import java.util.ArrayList;
import java.util.List;

public class Dienstwagen {
    private String kennzeichen;
    private String hersteller;
    private String farbe;
    private List<Mitarbeiter> fahrerListe;

    public Dienstwagen(String kennzeichen, String hersteller, String farbe) {
        this.kennzeichen = kennzeichen;
        this.hersteller = hersteller;
        this.farbe = farbe;
        this.fahrerListe = new ArrayList<>();
    }

    public void addFahrer(Mitarbeiter mitarbeiter) {
        if (!this.fahrerListe.contains(mitarbeiter)) {
            this.fahrerListe.add(mitarbeiter);
        }
    }

    public List<Mitarbeiter> getFahrerListe() {
        return fahrerListe;
    }

    @Override
    public String toString() {
        return hersteller + ", " + kennzeichen + ", " + farbe;
    }
}