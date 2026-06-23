
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// @lc code=start
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int m = nums2.length;

        if (n > m) {
            return intersect(nums2, nums1);
        }

        Map<Integer, Integer> map = new HashMap<>();

        for (int num : nums1) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        int idx = 0;

        for (int num : nums2) {
            int freq = map.getOrDefault(num, 0);

            if (freq > 0) {
                nums2[idx++] = num;
                map.put(num, freq - 1);
            }
        }

        return Arrays.copyOf(nums2, idx);
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=350 lang=java
 *
 * [350] Intersection of Two Arrays II
 */