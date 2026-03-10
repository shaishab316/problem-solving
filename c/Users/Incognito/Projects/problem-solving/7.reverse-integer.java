// @lc code=start
class Solution {
    public int reverse(int x) {
        int reversed = 0;

        while (x != 0) {
            int digit = x % 10;

            // overflow check
            if (reversed != (reversed * 10) / 10) {
                return 0;
            }

            reversed = reversed * 10 + digit;

            x /= 10; // left shift
        }

        return reversed;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=7 lang=java
 *
 * [7] Reverse Integer
 */
