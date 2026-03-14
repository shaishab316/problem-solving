/*
 * @lc app=leetcode id=643 lang=java
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int n = nums.length;

        int sum = 0;

        // ? calculate first window sum.
        for (int i = 0; i < k; i++) {
            sum += nums[i];
        }

        int maxSum = sum;

        for (int i = k; i < n; i++) {
            sum -= nums[i - k]; // remove left element of this window
            sum += nums[i]; // add new right element into this window

            maxSum = Math.max(maxSum, sum);
        }

        return (double) maxSum / k;
    }
}
// @lc code=end
