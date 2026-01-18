import java.util.Arrays;

// @lc code=start
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        for (int i = 0; i < n; i++) {
            nums1[m + i] = nums2[i];
        }

        Arrays.sort(nums1);
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=88 lang=java
 *
 * [88] Merge Sorted Array
 */
