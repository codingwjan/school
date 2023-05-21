import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class Bibliothek {
    private List<Buch> buecher = new LinkedList<>();

    public void registrieren(Buch buch) {
        this.buecher.add(buch);
    }

    public Buch leihen(String isbn, Kunde kunde) {
        Optional<Buch> buch = this.buecher.stream()
                .filter(b -> b.getIsbn().equals(isbn) && b.getLeihe() == null)
                .findFirst();
        if (buch.isPresent()) {
            Buch buchgeliehen = buch.get();
            buchgeliehen.setLeihe(new Leihe(kunde));
            return buchgeliehen;
        }
        return null;
    }

    public List<Buch> suchen(String titel) {
        return this.buecher.stream()
                .filter(b -> b.getTitel().contains(titel) && b.getLeihe() == null)
                .collect(Collectors.toList());
    }
}
