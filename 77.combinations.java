import java.util.*;

// @lc code=start
class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> result = new ArrayList<>();

        helper(n, k, result, new ArrayList<>(), 1);

        return result;
    }

    private void helper(int n, int k, List<List<Integer>> result, List<Integer> current, int start) {
        if (current.size() == k) {
            result.add(new ArrayList<>(current));
            return; // break
        }

        for (int i = start; i <= n; i++) {
            current.add(i);

            helper(n, k, result, current, i + 1);

            current.remove(current.size() - 1); // backtrack
        }
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=77 lang=java
 *
 * [77] Combinations
 */
