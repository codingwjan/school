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

  //Verkehrsflugzeug
  public class Verkehrsflugzeug extends Flugzeug {
    private int anzahlFluegel;             // Anzahl Flügelpaare

    public Verkehrsflugzeug(String hersteller, int maxSpeed, int anzahlFluegel, int anzahlSitze, int anzahlToiletten, int anzahlKabinen, int anzahlFlugbegleiter) {
      super(hersteller, maxSpeed, anzahlFluegel);
      this.anzahlSitze = anzahlSitze;
      this.anzahlToiletten = anzahlToiletten;
      this.anzahlKabinen = anzahlKabinen;
      this.anzahlFlugbegleiter = anzahlFlugbegleiter;
    }
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