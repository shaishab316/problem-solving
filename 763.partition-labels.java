import java.util.ArrayList;
import java.util.List;

// @lc code=start
class Solution {
    public List<Integer> partitionLabels(String s) {
        int n = s.length();
        int[] lastOccurrence = new int[26];

        for (int i = 0; i < n; i++) {
            lastOccurrence[s.charAt(i) - 97] = i; // ? 'a' == 97 in char code
        }

        List<Integer> result = new ArrayList<>();

        int start = 0;
        int max = 0;

        for (int i = 0; i < n; i++) {
            max = Math.max(max, lastOccurrence[s.charAt(i) - 97]);

            if (max == i) {
                result.add(i + 1 - start);
                start = i + 1;
            }
        }

        return result;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=763 lang=java
 *
 * [763] Partition Labels
 */
