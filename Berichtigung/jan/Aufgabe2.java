import java.util.Scanner;
public class Aufgabe2 {
    public static void main(String args[]) {
        //eingabezahl
        int eingabeZahl;
        int aktuellerDurchlauf = 2;
        int durchlaeufe = 2;
        int teilbarkeitZaeler = 0;
        Scanner input = new Scanner(System.in);
        System.out.println("Bitte geben Sie eine Zahl ein: ");
        eingabeZahl = input.nextInt();

        while (eingabeZahl/2 >= durchlaeufe) {
            
            durchlaeufe++;
            if (eingabeZahl % durchlaeufe == 0) {
                teilbarkeitZaeler++;
            }
        }
        if (teilbarkeitZaeler == 0) {
            System.out.println("Die Zahl ist eine Primzahl");
        } else {
            System.out.println("Die Zahl ist keine Primzahl");
        }
    }
}