// @lc code=start
class Solution {
    static int POSSIBLE_MAX_DIGIT = 9;

    public int minPartitions(String n) {
        int maxDigit = 0;

        for (char ch : n.toCharArray()) {
            int digit = ch - '0';

            maxDigit = Math.max(maxDigit, digit);

            if (maxDigit == POSSIBLE_MAX_DIGIT) {
                break;
            }
        }

        return maxDigit;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=1689 lang=java
 *
 * [1689] Partitioning Into Minimum Number Of Deci-Binary Numbers
 */
