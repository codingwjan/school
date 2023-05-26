import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class MyTestClass {

    @Test
    public void myTestMethod() {
        plane plane = new plane();
        plane.fly(39.0);
        assertEquals(39, plane.fly(39.0), 0.0001);
    }
}
