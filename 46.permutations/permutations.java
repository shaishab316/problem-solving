import java.util.*;

// @lc code=start
class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        backtrack(nums, result, new ArrayList<>());

        return result;
    }

    private void backtrack(int[] nums, List<List<Integer>> result, List<Integer> curr) {
        if (nums.length == curr.size()) {
            result.add(new ArrayList<>(curr)); // push as copy
            return;
        }

        for (int num : nums) {
            if (curr.contains(num)) {
                continue; // should be unique
            }

            curr.add(num);
            backtrack(nums, result, curr);
            curr.remove(curr.size() - 1); // backtrack
        }
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=46 lang=java
 *
 * [46] Permutations
 */