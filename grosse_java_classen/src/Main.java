public class Main {
    public static void main(String[] args) {
        String vorname = "Samuel";
        String nachname = "OpenAI";
        double gehalt = 69420.0;
        String taetigkeit = "CEO of OpenAI";

        Arbeitsvertrag arbeitsvertrag = new Arbeitsvertrag(gehalt, taetigkeit);
        Mitarbeiter mitarbeiter = new Mitarbeiter(arbeitsvertrag, vorname, nachname);
        mitarbeiter.setVorname(vorname);
        mitarbeiter.setNachname(nachname);
        mitarbeiter.getArbeitsvertrag().setGehalt(gehalt);
        mitarbeiter.getArbeitsvertrag().setTaetigkeit(taetigkeit);


        System.out.println(mitarbeiter.getVorname() + " " + mitarbeiter.getNachname() + " earns $" + mitarbeiter.getArbeitsvertrag().getGehalt() + ". He is the " + mitarbeiter.getArbeitsvertrag().getTaetigkeit());
    }
}