// @lc code=start
class Solution {
    public int reverseDegree(String s) {
        int total = 0;

        for (int i = 0; i < s.length(); i++) {
            int reverseDegree = (int) ('z' - s.codePointAt(i)) + 1;

            total += reverseDegree * (i + 1);
        }

        return total;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=3498 lang=java
 *
 * [3498] Reverse Degree of a String
 */
