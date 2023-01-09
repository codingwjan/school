public class Main {
    public static void main(String[] args) {
        //variables
        int[] demoArray = {4,1,2,6,7,869420};
        int max = 0;

        //loop
        for (int i : demoArray) {
            if (i > max) {
                max = i;
            }
        }
        //return
        System.out.println(max);
    }
}