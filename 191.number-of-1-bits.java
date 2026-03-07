
// @lc code=start
class Solution {
    public int hammingWeight(int n) {
        int bitCount = 0;

        while (n != 0) {
            if ((n & 1) == 1) {
                bitCount++;
            }

            n >>= 1;
        }

        return bitCount;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=191 lang=java
 *
 * [191] Number of 1 Bits
 */