public class Creditcard {
        
        Integer sec_num;
        String type;
        Double availability = 2000.0;

    public Creditcard() {
    }
    
    public void secNumber() {
        System.out.println(sec_num);
    }

    public void getType() {
        System.out.println(type);
    }

    public void doCredit(double change) {
        if(change == 0) {
            System.out.println(availability);
        } else {
            availability = availability + change;
            System.out.println(availability);
        }
    }

    // Getter
    public Integer getSec_num() {
        return sec_num;
    }
    // Setter
    public void setSec_num(Integer sec_num) {
        this.sec_num = sec_num;
    }


}