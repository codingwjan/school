public class Mitarbeiter {
    Arbeitsvertrag arbeitsvertrag = new Arbeitsvertrag();

    String vorname;
    String nachname;


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
