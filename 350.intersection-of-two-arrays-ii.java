
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// @lc code=start
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);

        int n = nums1.length;
        int m = nums2.length;

        List<Integer> intersection = new ArrayList<>();

        int i = 0, j = 0;
        int idx = 0;

        while (i < n && j < m) {
            if (nums1[i] > nums2[j]) {
                j++;
            } else if (nums1[i] < nums2[j]) {
                i++;
            } else {
                nums1[idx] = nums1[i];

                i++;
                j++;
                idx++;
            }
        }

        return Arrays.copyOfRange(nums1, 0, idx);
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=350 lang=java
 *
 * [350] Intersection of Two Arrays II
 */