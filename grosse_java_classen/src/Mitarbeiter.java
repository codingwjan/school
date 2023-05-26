public class Mitarbeiter {
    Arbeitsvertrag arbeitsvertrag;
    String vorname;
    String nachname;

    public Mitarbeiter(Arbeitsvertrag arbeitsvertrag, String vorname, String nachname) {
        this.arbeitsvertrag = arbeitsvertrag;
        this.vorname = vorname;
        this.nachname = nachname;
    }

    public Arbeitsvertrag getArbeitsvertrag() {
        return arbeitsvertrag;
    }

    public void setArbeitsvertrag(Arbeitsvertrag arbeitsvertrag) {
        this.arbeitsvertrag = arbeitsvertrag;
    }

    public String getVorname() {
        return vorname;
    }

    public void setVorname(String vorname) {
        this.vorname = vorname;
    }

    public String getNachname() {
        return nachname;
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }
}
