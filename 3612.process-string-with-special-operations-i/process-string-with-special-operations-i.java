
// @lc code=start
class Solution {
    public String processStr(String s) {
        StringBuilder sb = new StringBuilder();
        int n = s.length();

        for (char ch : s.toCharArray()) {
            if (ch >= 'a' && ch <= 'z') {
                sb.append(ch);
            } else if (ch == '#') {
                sb.append(sb);
            } else if (ch == '%') {
                sb.reverse();
            } else if (ch == '*') {
                if (sb.length() != 0) {
                    sb.deleteCharAt(sb.length() - 1);
                }
            }
        }

        return sb.toString();
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=3612 lang=java
 *
 * [3612] Process String with Special Operations I
 */