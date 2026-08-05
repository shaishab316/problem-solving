
import java.util.Arrays;

// @lc code=start
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int n = nums.length;
        int min = Integer.MAX_VALUE;

        int left = 0;
        int right = 0;

        int sum = 0;

        while (right < n) {
            sum += nums[right];

            while (sum >= target) {
                min = Math.min(min, right - left + 1);
                sum -= nums[left];
                left++;
            }

            right++;
        }

        return min == Integer.MAX_VALUE ? 0 : min;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=209 lang=java
 *
 * [209] Minimum Size Subarray Sum
 */