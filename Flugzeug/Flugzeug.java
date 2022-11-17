package career.Flugzeug;

public abstract class Flugzeug {
  private String hersteller;            // Herstellername
  private int maxSpeed;                 // Max. Geschwindigkeit
  private String immatNummer;           // Immatrikulationsnummer     
  private int anzahlFluegel = 1;        // Anzahl Flügelpaare
  private boolean offenesCockpit;         // Open Top
 
  public Flugzeug(String hersteller, int maxSpeed, int anzahlFluegel, String immatNummer) {
    this.hersteller = hersteller;
    this.maxSpeed = maxSpeed;
    this.anzahlFluegel = anzahlFluegel;
  }
 
  public String getImmatNummer() {
    return immatNummer;
  }
 
  protected void setImmatNummer(String immatNummer) {
    this.immatNummer = immatNummer;
  }
 
  public int getMaxSpeed() {
    return maxSpeed; 
  }

  public void setMaxSpeed(int maxSpeed) {
    this.maxSpeed = maxSpeed;
  }

  abstract public boolean getLooping();

    public String getHersteller() {
        return hersteller;
    }

    public void setHersteller(String hersteller) {
        this.hersteller = hersteller;
    }

    public int getAnzahlFluegel() {
        return anzahlFluegel;
    }

    public void setAnzahlFluegel(int anzahlFluegel) {
        this.anzahlFluegel = anzahlFluegel;
    }

    public boolean offenesCockpit() {
        return offenesCockpit;
    }

}
