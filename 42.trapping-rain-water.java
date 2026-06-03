
// @lc code=start
class Solution {
    public int trap(int[] height) {
        int maxWater = 0;
        int left = 0;
        int right = height.length - 1;
        int leftMax = Integer.MIN_VALUE;
        int rightMax = Integer.MIN_VALUE;

        while (left < right) {
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);

            // water height always depends on lower height
            if (leftMax < rightMax) {
                maxWater += leftMax - height[left];
                left++;
            } else {
                maxWater += rightMax - height[right];
                right--;
            }

        }

        return maxWater;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=42 lang=java
 *
 * [42] Trapping Rain Water
 */