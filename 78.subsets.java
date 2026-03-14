import java.util.*;

// @lc code=start
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        backtrack(nums, 0, result, new ArrayList<>());

        return result;
    }

    private void backtrack(int[] nums, int start, List<List<Integer>> result, List<Integer> current) {
        result.add(new ArrayList<>(current)); // store as copy

        for (int i = start; i < nums.length; i++) {
            current.add(nums[i]);
            backtrack(nums, i + 1, result, current);
            current.removeLast(); // backtrack
        }
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=78 lang=java
 *
 * [78] Subsets
 */