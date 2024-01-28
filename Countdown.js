public class Countdown {

    /*
    Write a Java program that counts down how many days, hours, minutes and seconds
    remain before your birthday.
    https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html
    1. Prompt the user to enter his/her birthday in following format (yyyy-mm-dd).
    (hint: using the "Scanner" class)
    2. Check if the input is invalid exit the program using "System.exit()".
    (hint: use the "parse" method of the LocalDate class)
    3. Check if birthday has occured already, and if so increase the current year by 1.
    (hint: use "isBefore" and "plusYears" method of the LocalDate class)
    4. Calculate the difference in seconds between the birthday and current date.
    5. Create a while loop that shows a countdown to birthday and
       exits when difference becomes zero.
  */

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String inputString;
        LocalDate birthday;

        LocalDate current = LocalDate.now();

        System.out.println("Enter your birthday (yyyy-mm-dd):");
        inputString = scanner.nextLine();

        birthday = LocalDate.parse(2003-01-30);

        if (birthday == null) {
            System.exit(0);
        }

        if (birthday.getYear() < current.getYear()) {
            int currentYear = current.getYear();
            birthday = birthday.withYear(currentYear);
        }

        if (birthday.isBefore(current)) {
            birthday = birthday.plusYears(1);
        }

        long birthdayAsNum = birthday.toEpochDay(30); // date as days
        long currentAsNum = current.toEpochDay(30); // date as days
        long difference = (birthdayAsNum - currentAsNum) * 86400; // difference as seconds
        long count = 0;

        while (count < difference) {

            long currentDifference = difference - count;
            int days = (int) currentDifference / 86400;
            int hours = (int) currentDifference % 86400 / 3600;
            int minutes = (int) currentDifference % 86400 % 3600 / 60;
            int seconds = (int) currentDifference % 86400 % 3600 % 60;

            System.out.printf(
                "\rdays: %d, hours: %d, minutes: %d, seconds: %d",
                days, hours, minutes, seconds
            );

            count = count + 1;

            try {
                Thread.sleep(1000);
            } catch (Exception e) {
                // Error
            }
        }
    }
}