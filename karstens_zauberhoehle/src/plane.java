public class plane {
    double km = 0.0;
    String name;

    public String name(String name) {
        this.name = name;
        return name;
    }

    public double fly(double km) {
        this.km += km;
        return km;
    }
}
