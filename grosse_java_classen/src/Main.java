public class Main {
    public static void main(String[] args) {
        Mitarbeiter mitarbeiter = new Mitarbeiter();
        mitarbeiter.setVorname("Max");
        mitarbeiter.setNachname("Mustermann");
        mitarbeiter.getArbeitsvertrag().setGehalt(1000.0);
        mitarbeiter.getArbeitsvertrag().setTaetigkeit("Softwareentwickler");

        System.out.println(mitarbeiter.getVorname() + " " + mitarbeiter.getNachname() + " verdient " + mitarbeiter.getArbeitsvertrag().getGehalt() + " Euro als " + mitarbeiter.getArbeitsvertrag().getTaetigkeit());
    }
}