import java.util.ArrayList;
import java.util.List;

public class Mitarbeiter {
    private String name;
    private String vorname;
    private List<Dienstwagen> seineAutos;

    public Mitarbeiter(String name, String vorname) {
        this.name = name;
        this.vorname = vorname;
        this.seineAutos = new ArrayList<>();
    }

    public void addAuto(Dienstwagen auto) {
        if (!this.seineAutos.contains(auto)) {
            this.seineAutos.add(auto);
            auto.addFahrer(this);
        }
    }

    public List<Dienstwagen> getSeineAutos() {
        return seineAutos;
    }

    @Override
    public String toString() {
        return vorname + " " + name;
    }
}
