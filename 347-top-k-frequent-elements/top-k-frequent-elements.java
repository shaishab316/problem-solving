import java.util.*;

// @lc code=start
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();

        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        List<Integer> sortedNums = new ArrayList<>(freq.keySet());
        sortedNums.sort((a, b) -> (freq.get(b) - freq.get(a)));

        int[] result = new int[k];

        for (int i = 0; i < k; i++) {
            result[i] = sortedNums.get(i);
        }

        return result;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=347 lang=java
 *
 * [347] Top K Frequent Elements
 */