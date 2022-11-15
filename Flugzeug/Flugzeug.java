public abstract class Flugzeug {
  private String hersteller;            // Herstellername
  private int maxSpeed;                 // Max. Geschwindigkeit
  private String immatNummer;           // Immatrikulationsnummer     
  private int anzahlFluegel = 1;        // Anzahl Flügelpaare
 
  public Flugzeug(String hersteller, int maxSpeed, int anzahlFluegel) {       
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
 
  abstract public boolean getLooping();
 
  // weitere Methoden
}