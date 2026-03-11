// @lc code=start
class Solution {
    public int reverseBits(int n) {
        int reversed = 0;

        for (int i = 0; i < 32; i++) {
            reversed <<= 1; // left move

            reversed |= n & 1; // add last bit

            n >>= 1; // remove last bit
        }

        return reversed;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=190 lang=java
 *
 * [190] Reverse Bits
 */