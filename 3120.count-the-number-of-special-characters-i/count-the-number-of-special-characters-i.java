/*
 * @lc app=leetcode id=3120 lang=java
 *
 * [3120] Count the Number of Special Characters I
 */

// @lc code=start
class Solution {
    public int numberOfSpecialChars(String word) {
        boolean[] lowerSeen = new boolean[26];
        boolean[] upperSeen = new boolean[26];

        for (char ch : word.toCharArray()) {
            if (ch >= 'a' && ch <= 'z') {
                lowerSeen[ch - 'a'] = true;
            } else {
                upperSeen[ch - 'A'] = true;
            }
        }

        int result = 0;

        for (int i = 0; i < 26; i++) {
            if (lowerSeen[i] && upperSeen[i]) {
                result++;
            }
        }

        return result;
    }
}
// @lc code=end
