public class Dienstwagen {
    private String kennzeichen;
    private String hersteller;
    private String farbe;
    private Mitarbeiter seinFahrer;

    public Dienstwagen(String kennzeichen, String hersteller, String farbe, Mitarbeiter seinFahrer) {
        this.kennzeichen = kennzeichen;
        this.hersteller = hersteller;
        this.farbe = farbe;
        this.seinFahrer = seinFahrer;
    }

    public Mitarbeiter getSeinFahrer() {
        return seinFahrer;
    }

    public String toString() {
        return hersteller + ", " + kennzeichen + ", " + farbe + " wird gefahren von " + seinFahrer.getName();
    }

    public void setSeinFahrer(Mitarbeiter mitarbeiter1) {
        this.seinFahrer = mitarbeiter1;
    }
}