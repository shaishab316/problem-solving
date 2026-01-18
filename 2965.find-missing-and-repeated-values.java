// @lc code=start
class Solution {
    public int[] findMissingAndRepeatedValues(int[][] grid) {
        int n = grid.length;
        int N = n * n;

        int[] freq = new int[N + 1];

        // calc freq
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int num = grid[i][j];

                freq[num]++;
            }
        }

        int repeated = -1, missing = -1;

        for (int i = 1; i <= N; i++) {
            if (freq[i] == 2) {
                repeated = i;
            }

            if (freq[i] == 0) {
                missing = i;
            }
        }

        return new int[] { repeated, missing };
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=2965 lang=java
 *
 * [2965] Find Missing and Repeated Values
 */
