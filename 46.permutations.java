import java.util.*;

// @lc code=start
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        helper(nums, result, new ArrayList<>());

        return result;
    }

    private void helper(int[] nums, List<List<Integer>> result, List<Integer> current) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current)); // add as copy
            return; // break
        }

        for (int num : nums) {
            if (current.contains(num)) {
                continue; // pass
            }

            current.add(num);
            helper(nums, result, current);
            current.remove(current.size() - 1); // backtrack
        }

    }
}
// @lc code=end

/*
 * @lc app=leetcode id=46 lang=java
 *
 * [46] Permutations
 */
