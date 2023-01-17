import java.util.Random;
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {

        for (int i = 0; i<=1000; i++) {
            //random number betweenn 0 and 1
            Random rand = new Random();
            int r = rand.nextInt(0, 1 + 1);
            //get random name from array of names
            String[] names = Basisklasse.vornamen[r];
            String[] sirNames = Basisklasse.nachnamen;
            String vorName = names[rand.nextInt(0, sirNames.length)];
            Random random = new Random();
            String nachName = sirNames[random.nextInt(sirNames.length)];
            //15% chance of having double sirname
            if (random.nextInt(0 ,  100) <= 10) {
                vorName = vorName + '-' + sirNames[random.nextInt(sirNames.length)];
            }
            if (random.nextInt(0, 100) <= 15) {
                nachName = nachName + '-' + sirNames[random.nextInt(sirNames.length)];
            }
            System.out.println("Name: " + vorName + ' ' + nachName);
        }
    }
}