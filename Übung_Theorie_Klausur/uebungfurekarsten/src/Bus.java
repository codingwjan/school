public class Bus {
    private double kilometer = 0;
    public void drive(double kilometer) {
        this.kilometer = kilometer;
        System.out.println("Bus drove " + kilometer + " km");
    }
    public double getKilometer() {
        return this.kilometer;
    }
}
