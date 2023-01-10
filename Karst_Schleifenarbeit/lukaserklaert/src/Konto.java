public class Konto {


    long kontoNr;
    double kontostand;
    private String BankName;

    public Konto(long kontoNr, String bankName) {
        this.kontoNr = kontoNr;
        this.BankName = bankName;
    }

    public void eizablen(double amout) {
        this.kontostand = kontostand + amout;
    }

}
