import java.util.Date;

public class Fahrt {
    private Date datum;
    private Mitarbeiter mitarbeiter;
    private int kmStart;
    private int kmEnde;
    private boolean dienstlich;

    public Fahrt(Date datum, Mitarbeiter mitarbeiter, int kmStart, int kmEnde, boolean dienstlich) {
        this.datum = datum;
        this.mitarbeiter = mitarbeiter;
        this.kmStart = kmStart;
        this.kmEnde = kmEnde;
        this.dienstlich = dienstlich;
    }

    public Date getDatum() {
        return datum;
    }

    public Mitarbeiter getMitarbeiter() {
        return mitarbeiter;
    }

    public int getKmStart() {
        return kmStart;
    }

    public int getKmEnde() {
        return kmEnde;
    }

    public boolean isDienstlich() {
        return dienstlich;
    }
}