
// @lc code=start
class Solution {
    public void reverseString(char[] s) {
        int n = s.length;
        int left = 0;
        int right = n - 1;

        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left++;
            right--;
        }
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=344 lang=java
 *
 * [344] Reverse String
 */