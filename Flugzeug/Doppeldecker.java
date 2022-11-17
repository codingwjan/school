package career.Flugzeug;

public class Doppeldecker extends Flugzeug {
    private int maxPassagiere;              // Max. Passagiere
    private String hersteller;              // Herstellername
    private int maxSpeed;                   // Max. Geschwindigkeit
    private String immatNummer;             // Immatrikulationsnummer
    private boolean loopingMöglich;         // Looping möglichkeit
    private int loopingSpeed;               // Looping Geschwindigkeit
    private boolean offenesCockpit;         // Open Top


    public Doppeldecker(String hersteller, String immatNummer, int maxSpeed, int maxPassagiere, boolean loopingMöglich, int loopingSpeed, boolean offenesCockpit) {
        super(hersteller, maxSpeed, 2, immatNummer);
        this.maxPassagiere = maxPassagiere;
        this.loopingMöglich = loopingMöglich;
        this.loopingSpeed = loopingSpeed;
        this.offenesCockpit = offenesCockpit;
    }

    public int getMaxPassagiere() {
        return maxPassagiere;
    }

    public void setMaxPassagiere(int maxPassagiere) {
        this.maxPassagiere = maxPassagiere;
    }

    public boolean getoffenesCockpit() {
        return offenesCockpit;
    }


    public boolean getLoopingMöglichkeit() {
        return loopingMöglich;
    }


    public void offenesCockpit(boolean openTop) {
        if (this.offenesCockpit == true) {
            this.offenesCockpit = openTop;
        }
    }


    public boolean getLooping() {

        if (getMaxSpeed() < 320) {
            loopingMöglich = false;
        } else {
            loopingMöglich = true;
        }

        if (loopingSpeed > getMaxSpeed() && loopingMöglich == true) {
            return true;
        } else {
            return false;
        }

    }
}