// @lc code=start
class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int n = nums.length, maxSum = nums[0], currMaxSum = nums[0], minSum = nums[0], currMinSum = nums[0],
                totalSum = nums[0];

        for (int i = 1; i < n; i++) {
            int num = nums[i];

            currMaxSum = Math.max(num, currMaxSum + num);
            maxSum = Math.max(maxSum, currMaxSum);

            currMinSum = Math.min(num, currMinSum + num);
            minSum = Math.min(minSum, currMinSum);

            totalSum += num;
        }

        if (maxSum < 0) {
            return maxSum;
        }

        return Math.max(maxSum, totalSum - minSum);
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=918 lang=java
 *
 * [918] Maximum Sum Circular Subarray
 */
