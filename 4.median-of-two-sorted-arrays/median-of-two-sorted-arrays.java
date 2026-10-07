// @lc code=start
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;

        boolean isEven = (m + n) % 2 == 0;

        // m should be less then n
        if (m > n) {
            return findMedianSortedArrays(nums2, nums1);
        }

        int totalLeft = (m + n + 1) / 2;

        int left = 0;
        int right = m;

        while (left <= right) {
            int partitionX = (left + right) / 2;
            int partitionY = totalLeft - partitionX;

            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];

            int minRightX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];
            int minRightY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];

            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {

                if (isEven) {
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
                } else {
                    return Math.max(maxLeftX, maxLeftY);
                }

            } else if (maxLeftX > minRightY) {
                right = partitionX - 1;
            } else {
                left = partitionX + 1;
            }
        }

        throw new Error("Array not sorted");
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=4 lang=java
 *
 * [4] Median of Two Sorted Arrays
 */