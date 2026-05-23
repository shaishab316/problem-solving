
// @lc code=start
class Solution {
    private int BASE = 26;

    public int titleToNumber(String columnTitle) {
        int result = 0;

        for (char c : columnTitle.toCharArray()) {
            int currentValue = c - 'A' + 1;

            result = result * this.BASE + currentValue;
        }

        return result;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=171 lang=java
 *
 * [171] Excel Sheet Column Number
 */