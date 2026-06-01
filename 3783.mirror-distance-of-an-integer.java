
// @lc code=start
class Solution {
    public int mirrorDistance(int n) {
        return Math.abs(n - reverse(n));
    }

    private int reverse(int n) {
        int reversed = 0;

        while (n > 0) {
            reversed = (n % 10) + reversed * 10;

            n /= 10;
        }

        return reversed;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=3783 lang=java
 *
 * [3783] Mirror Distance of an Integer
 */