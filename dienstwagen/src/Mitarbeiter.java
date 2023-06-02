public class Mitarbeiter {
    private String name;
    private String vorname;
    private Dienstwagen seinAuto;

    public Mitarbeiter(String name, String vorname, Dienstwagen seinAuto) {
        this.name = name;
        this.vorname = vorname;
        this.seinAuto = seinAuto;
    }

    public String getName() {
        return name;
    }

    public Dienstwagen getSeinAuto() {
        return seinAuto;
    }

    public String toString() {
        return vorname + " " + name + " fährt mit " + seinAuto;
    }
}