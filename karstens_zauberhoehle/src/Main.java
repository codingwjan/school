public class Main {
    public static void main(String[] args) {
        plane plane = new plane();
        plane.name("Günter");
        plane.fly(100.0);
        System.out.println("the plane is called "+plane.name +"and it has flown "+ plane.km+"km!");
    }
}