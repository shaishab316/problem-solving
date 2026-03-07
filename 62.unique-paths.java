
// @lc code=start
class Solution {
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];

        // fill edge
        for (int j = 0; j < n; j++) {
            dp[0][j] = 1;
        }
        for (int i = 0; i < m; i++) {
            dp[i][0] = 1;
        }

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
            }
        }

        return dp[m - 1][n - 1];
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=62 lang=java
 *
 * [62] Unique Paths
 */

// Solution 1:
/*
 * class Solution {
 * public int uniquePaths(int m, int n) {
 * int min = Math.min(m, n) - 1;
 * int max = Math.max(m, n);
 * 
 * double result = 1.0;
 * 
 * while (min > 0) {
 * result *= (double) max++ / min--;
 * }
 * 
 * return (int) (result + 0.5);
 * }
 * }
 */