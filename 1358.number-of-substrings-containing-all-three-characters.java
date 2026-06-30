
// @lc code=start
class Solution {
    public int numberOfSubstrings(String s) {
        int n = s.length();
        int count = 0;
        int[] freq = { -1, -1, -1 };

        for (int i = 0; i < n; i++) {
            freq[s.charAt(i) - 'a'] = i;

            int currMin = freq[0];

            if (currMin > freq[1]) {
                currMin = freq[1];
            }

            if (currMin > freq[2]) {
                currMin = freq[2];
            }

            count += currMin + 1;
        }

        return count;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=1358 lang=java
 *
 * [1358] Number of Substrings Containing All Three Characters
 */