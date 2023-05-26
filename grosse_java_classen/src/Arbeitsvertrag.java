public class Arbeitsvertrag {
    public Arbeitsvertrag(double gehalt, String taetigkeit) {
        this.gehalt = gehalt;
        this.taetigkeit = taetigkeit;
    }

    double gehalt;
    String taetigkeit;

    public double getGehalt() {
        return gehalt;
    }

    public String getTaetigkeit() {
        return taetigkeit;
    }

    public void setGehalt(double gehalt) {
        this.gehalt = gehalt;
    }

    public void setTaetigkeit(String taetigkeit) {
        this.taetigkeit = taetigkeit;
    }
}
