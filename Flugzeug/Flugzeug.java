package career.Flugzeug;

public abstract class Flugzeug {
  private String hersteller;            // Herstellername
  private int maxSpeed;                 // Max. Geschwindigkeit
  private String immatNummer;           // Immatrikulationsnummer     
  private int anzahlFluegel = 1;        // Anzahl Flügelpaare
  private boolean offenesCockpit;       // Open Top

  public Flugzeug(String hersteller, int maxSpeed, int anzahlFluegel, String immatNummer) {
    this.hersteller = hersteller;
    this.maxSpeed = maxSpeed;
    this.anzahlFluegel = anzahlFluegel;
    this.immatNummer = immatNummer;
  }

  public String getImmatNummer() {
    return immatNummer;
  }

  public int getMaxSpeed() {
    return maxSpeed; 
  }


  abstract public boolean getLooping();

    public String getHersteller() {
        return hersteller;
    }

    public int getAnzahlFluegel() {
        return anzahlFluegel;
    }


    public boolean offenesCockpit() {
        return offenesCockpit;
    }

}
