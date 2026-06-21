
// @lc code=start
class Solution {
    public int findPeakElement(int[] nums) {
        int n = nums.length;
        int left = 0;
        int right = n - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[mid + 1]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=162 lang=java
 *
 * [162] Find Peak Element
 */