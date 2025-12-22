// @lc code=start
class Solution {
    public int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        int left = 0, right = n - 1;

        for (int i = n - 1; i >= 0; i--) {
            int leftSQ = nums[left] * nums[left];
            int rightSQ = nums[right] * nums[right];

            if (leftSQ > rightSQ) {
                result[i] = leftSQ;
                left++;
            } else {
                result[i] = rightSQ;
                right--;
            }
        }

        return result;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=977 lang=java
 *
 * [977] Squares of a Sorted Array
 */

// class Solution {
// public int[] sortedSquares(int[] nums) {
// for (int i = 0; i < nums.length; i++) {
// nums[i] *= nums[i];
// }

// Arrays.sort(nums);

// return nums;
// }
// }