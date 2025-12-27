// @lc code=start
class Solution {
    public int maxSubArray(int[] nums) {
        int result = Integer.MIN_VALUE;
        int currentSum = 0;

        for (int num : nums) {
            currentSum += num;
            result = Math.max(result, currentSum);

            // reset if negative
            if (currentSum < 0) {
                currentSum = 0;
            }
        }

        return result;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=53 lang=java
 *
 * [53] Maximum Subarray
 */
