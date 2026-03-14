import java.util.HashSet;
import java.util.Set;

// @lc code=start
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();

        Set<Character> seen = new HashSet<>();

        int maxLength = 0;

        int left = 0;

        for (int right = 0; right < n; right++) {

            // ? if duplicate contains will shrink
            while (seen.contains(s.charAt(right))) {
                seen.remove(s.charAt(left));
                left++;
            }

            // ? else add
            seen.add(s.charAt(right));

            maxLength = Math.max(maxLength, seen.size());
        }

        return maxLength;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=3 lang=java
 *
 * [3] Longest Substring Without Repeating Characters
 */