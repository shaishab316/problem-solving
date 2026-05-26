/*
 * @lc app=leetcode id=3120 lang=java
 *
 * [3120] Count the Number of Special Characters I
 */

// @lc code=start
class Solution {
    public int numberOfSpecialChars(String word) {
        int result = 0;

        for (int i = 0; i < 26; i++) {
            if (word.indexOf('a' + i) != -1 && word.indexOf('A' + i) != -1) {
                result++;
            }
        }

        return result;
    }
}
// @lc code=end
