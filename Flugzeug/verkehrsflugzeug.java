package career.Flugzeug;

public class Verkehrsflugzeug extends Flugzeug {
    private int maxPassagiere;            // Max. Passagiere
    private String hersteller;            // Herstellername
    private int maxSpeed;                 // Max. Geschwindigkeit
    private String immatNummer;           // Immatrikulationsnummer

  public Verkehrsflugzeug(String hersteller, int maxSpeed, int maxPassagiere, String immatNummer) {
    super(hersteller, maxSpeed, 1, immatNummer);
    this.maxPassagiere = maxPassagiere;
  }

    public int getMaxPassagiere() {
        return maxPassagiere;
    }

    public void setMaxPassagiere(int maxPassagiere) {
        this.maxPassagiere = maxPassagiere;
    }

    public boolean getLooping() {
        return false;
    }
}