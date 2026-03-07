/*
 * @lc app=leetcode id=242 lang=java
 *
 * [242] Valid Anagram
 */

// @lc code=start
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] freq = new int[26];

        // calculate s freq
        for (char ch : s.toCharArray()) {
            freq[ch - 97]++; // a = 97
        }

        // calculate t freq
        for (char ch : t.toCharArray()) {
            freq[ch - 97]--;
        }

        // check
        for (int n : freq) {
            if (n != 0) {
                return false;
            }
        }

        return true;
    }
}
// @lc code=end
