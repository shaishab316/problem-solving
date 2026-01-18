import java.util.HashSet;
import java.util.Set;

class Solution {
    public int vowelConsonantScore(String s) {
        int v = 0, c = 0;

        Set<Character> vawels = new HashSet<>();

        vawels.add('a');
        vawels.add('e');
        vawels.add('i');
        vawels.add('o');
        vawels.add('u');

        for (char ch : s.toCharArray()) {
            if (ch >= 'a' && ch <= 'z') {
                if (vawels.contains(ch)) {
                    v++;
                } else {
                    c++;
                }
            }
        }

        if (c > 0) {
            return v / c;
        }

        return 0;
    }
}

// https://leetcode.com/contest/weekly-contest-485/problems/vowel-consonant-score