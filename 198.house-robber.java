// @lc code=start
class Solution {
    public int rob(int[] nums) {
        int n = nums.length;

        // base
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return nums[0];
        } else if (n == 2) {
            return Math.max(nums[0], nums[1]);
        }

        int prev2 = nums[0];
        int prev1 = Math.max(nums[0], nums[1]);

        for (int i = 2; i < n; i++) {
            // if prev2 + current max or skip
            int current = Math.max(prev1, prev2 + nums[i]);

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=198 lang=java
 *
 * [198] House Robber
 */
