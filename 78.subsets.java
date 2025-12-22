import java.util.*;

// @lc code=start
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> subsets = new ArrayList<>();

        int n = nums.length;
        int subsetsCount = 1 << n; // 2^n

        for (int mask = 0; mask < subsetsCount; mask++) {
            List<Integer> subset = new ArrayList<>();

            for (int i = 0; i < n; i++) {
                // if i-th bit is set then push to subset
                if (((mask >> i) & 1) == 1) {
                    subset.add(nums[i]);
                }
            }

            subsets.add(subset);
        }

        return subsets;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=78 lang=java
 *
 * [78] Subsets
 */
