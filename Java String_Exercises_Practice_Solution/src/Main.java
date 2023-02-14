import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

import static java.rmi.dgc.VMID.isUnique;

public class Main {
    public static void main(String[] args) {
        System.out.println(removeNonDublicates());
    }

    //task1
    public static char getLetter() {
        String sentence = "The quick brown fox jumps over the lazy dog";
        int index = 6;
        char letter = sentence.charAt(index);
        System.out.println(letter);
        return letter;
    }

    //task2
    public static int getUnicode() {
        String sentence = "The quick brown fox jumps over the lazy dog";
        int index = 6;
        return sentence.codePointAt(index);
    }

    //task3
    public static int getUnicodeBefore() {
        String sentence = "The quick brown fox jumps over the lazy dog";
        int index = 6;
        return sentence.codePointBefore(index);
    }

    //task4
    public static int getUnicodeInRange() {
        String sentence = "The quick brown fox jumps over the lazy dog";
        return sentence.codePointCount(0, sentence.length());
    }

    //task5
    public static int compareUnicode() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String sentance2 = "The lol brown fox jumps over the lazy dog";
        return sentance.compareTo(sentance2);
    }

    //task6
    public static int compareUnicodeNoCase() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String sentance2 = "The lol brown fox jumps over the lazy dog";
        return sentance.compareToIgnoreCase(sentance2);
    }

    //task7
    public static String compareEndUnicode() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String sentance2 = "The lol brown fox jumps over the lazy dog";
        return sentance.concat(sentance2);
    }

    //task8
    public static boolean containUnicode() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String word = "quick";
        return sentance.contains(word);
    }

    //task 9
    public static boolean containSentanceUnicode() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String word = "lazy dog";
        return sentance.contains(word);
    }

    //task 10
    public static boolean compareBuffer() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String word = "lazy dog";
        String sentance2 = "The quick brown fox jumps over the lazy dog";
        String word2 = "lazy Dog";
        return (sentance.contentEquals(word) && sentance2.contentEquals(word2));
    }

    //task 11
    public static int charactersUnicode() {
        String sentance = "The quick brown fox jumps over the lazy dog";

        return sentance.length();
    }

    //task 12
    public static boolean endsUnicode() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String end = "dog";
        return sentance.endsWith(end);
    }

    //task 13
    public static boolean compareUnicode2() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String word = "The";
        String word2 = "the";
        return (sentance.startsWith(word) && sentance.startsWith(word2));
    }

    //task 14
    public static boolean endsUnicode2() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String word = "Dog";
        sentance = sentance.toLowerCase();
        word = word.toLowerCase();
        return sentance.endsWith(word);
    }

    //task 15
    public static Date printDate() {
        Date date = new Date();
        return date;
    }

    //task 16
    public static String byteArr1() {
        String str = "This is a sample String.";

        // Copy the contents of the String to a byte array.
        byte[] byte_arr = str.getBytes();

        // Create a new String using the contents of the byte array.
        String new_str = new String(byte_arr);

        // Display the contents of the byte array.
        String output = ("\nThe new String equals " + new_str + "\n");
        return output;
    }

    //task 17
    public static char[] byteArr2() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        char[] bytes = sentance.toCharArray();
        return bytes;
    }

    //task 18
    public static String uuid() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String uuid = java.util.UUID.randomUUID().toString();
        return uuid;
    }

    //task 19
    public static int getIndex(String str) {
        HashSet<Character> set = new HashSet<>();
        for (int i = 0; i < 26; i++) {
            char c = str.charAt(i);
            if (!set.contains(c)) {
                set.add(c);
                System.out.println(c);
            }
        }
        return 0;
    }

    //task 20
    public static String getCanonical() {
        String sentance = "The quick brown fox jumps over the lazy dog";
        String canonical = sentance.intern();
        return canonical;
    }

    //task 37
    public static String longestSubstring() {
        String sentance = "pickoutthelongestsubstring";
        String temp = "";
        int n = sentance.length();
        int substringlength = 0;

        Set<Character> set = new HashSet<>();

        for (int i = 0; i < n; i++) {
            char c = sentance.charAt(i);
            if (!set.contains(c)) {
                set.add(c);
                temp += c;
                substringlength = Math.max(substringlength, temp.length());
            } else {
                set.clear();
                temp = "";
            }
        }
        System.out.println(substringlength);
        return temp;
    }

    //task 38
    public static String removeDublicates() {
        String sentance = "W3resource";
        String temp = "";
        for (int i = 0; i < sentance.length(); i++) {
            char c = sentance.charAt(i);
            if (temp.indexOf(c) == -1) {
                temp += c;
            }
        }
        return temp;
    }

    //task 39
    public static String removeNonDublicates() {
        String sentance = "gibblegabbler";
        String temp = "";
        for (int i = 0; i < sentance.length(); i++) {
            char c = sentance.charAt(i);
            if (temp.indexOf(c) == -1) {
                temp += c;
            } else {
                temp = temp.replace(String.valueOf(c), "");
            }
        }
        return temp.charAt(0) + "";
    }


}