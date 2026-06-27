
// @lc code=start
class Solution {
    public String restoreString(String s, int[] indices) {
        int n = s.length();
        char[] charArr = new char[n];

        for (int i = 0; i < n; i++) {
            charArr[indices[i]] = s.charAt(i);
        }

        return new String(charArr);
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=1528 lang=java
 *
 * [1528] Shuffle String
 */