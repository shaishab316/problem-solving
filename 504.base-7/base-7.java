
// @lc code=start
class Solution {
    public String convertToBase7(int num) {
        StringBuilder sb = new StringBuilder();

        if (num < 0) {
            sb.append('-');
            num = -num;
        }

        while (num > 0) {
            sb.append(num % 7);

            num /= 7;
        }

        return sb.toString();
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=504 lang=java
 *
 * [504] Base 7
 */