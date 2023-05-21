import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class BusTest {
    private Bus bus;

    @BeforeEach
    public void setUp() {
        bus = new Bus();
    }

    @Test
    public void testDriveFunction() {
        bus.drive(50.0);
        assertEquals(50.0, bus.getKilometer(), 0.01);
    }
}
