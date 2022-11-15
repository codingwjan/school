import java.net.URISyntaxException;
import java.io.IOException;
import java.util.Scanner;
import java.awt.Desktop;
import java.net.URI;
import java.math.RoundingMode;
import java.text.DecimalFormat;

public class infotainment {

    private static final DecimalFormat df = new DecimalFormat("0.00");

    public static void main(String[] args) throws IOException, URISyntaxException {
        double tank;
        double verbrauch;
        double strecke;
        double ppl;

        String tanke = "https://waa.ai/f6lY";

        double tankrest;
        double fahrtkosten;

        Scanner scan = new Scanner(System.in);
        System.out.println("Tankinhalt");
        tank = scan.nextDouble();

        System.out.println("Verbrauch pro 100km");
        verbrauch = scan.nextDouble();

        System.out.println("Gefahrene Strecke");
        strecke = scan.nextDouble();

        System.out.println("preis pro liter");
        ppl = scan.nextDouble();

        tankrest = (tank - verbrauch * strecke / 100);
        fahrtkosten = ((tank - tankrest) * ppl);

        if (tank < 0) {
            System.out.println("tank unrealistisch");
            System.exit(0);
        }
        if (verbrauch < 0) {
            System.out.println("verbrauch unrealistisch");
            System.exit(0);
        }
        if (strecke < 0) {
            System.out.println("strecke unrealistisch");
            System.exit(0);
        }
        if (ppl < 0) {
            System.out.println("preis pro liter unrealistisch");
            System.exit(0);
        }

        if (tankrest < 0) {
            System.out.println("geh tanken ");
            Desktop.getDesktop().browse(new URI(tanke));
            System.exit(0);
        } else {
            System.out.println("fahrt möglich, Preis = " + fahrtkosten + "€");
        }

    }

}