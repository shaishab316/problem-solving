
// @lc code=start
class Solution {
    public int uniquePaths(int m, int n) {
        int min = Math.min(m, n) - 1;
        int max = Math.max(m, n);

        double result = 1.0;

        while (min > 0) {
            result *= (double) max++ / min--;
        }

        return (int) (result + 0.5);
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=62 lang=java
 *
 * [62] Unique Paths
 */
