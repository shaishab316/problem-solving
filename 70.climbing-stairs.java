// @lc code=start
class Solution {
    public int climbStairs(int n) {
        int first = 1, second = 1;

        while (n-- != 0) {
            int tempSecond = second;
            second += first;
            first = tempSecond;
        }

        return first;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=70 lang=java
 *
 * [70] Climbing Stairs
 */
