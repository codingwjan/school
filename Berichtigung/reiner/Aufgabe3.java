package reiner;

public class Aufgabe3 {
	
	private int id;
	private int maxGewicht;
	private double grundkosten;
	private double kostenProKmKG;
	private int aktuelleLadung;
	
	public Aufgabe3(int maxGewicht, int aktuelleLadung, double grundkosten, double kostenProKmKG) {
		
		this.maxGewicht = maxGewicht;
		this.aktuelleLadung = aktuelleLadung;
		this.grundkosten = grundkosten;
		this.kostenProKmKG = kostenProKmKG;
		
		if(aktuelleLadung > maxGewicht) {
			System.out.println("You can't put more than " + maxGewicht + "kg on the truck!");
		}
		
	}
	
	public boolean belade(int belade) {
		return false;
	}
	
	public void entlade() {
		
	}
	
	public double berechneKostenProFahrt(int aktuelleLadung, int id) {
		this.aktuelleLadung = aktuelleLadung;
		this.id = id;
		
		//???????????????????????????????????????????
	}
	
	public int getId() {
		return id;
	}
	
	public int getMaxGewicht() {
		return maxGewicht;
	}
	
	public double getGrundkosten() {
		return grundkosten;
	}
	
	public double getKostenProKmKG() {
		return kostenProKmKG;
	}
	
	public int getAktuelleLadung() {
		return aktuelleLadung;
	}
	
}
