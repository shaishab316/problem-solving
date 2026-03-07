/*
 * @lc app=leetcode id=338 lang=java
 *
 * [338] Counting Bits
 */

// @lc code=start
class Solution {
    public int[] countBits(int n) {
        int[] result = new int[n + 1];

        result[0] = 0;

        for (int i = 1; i <= n; i++) {
            result[i] = hammingWeight(i);
        }

        return result;
    }

    private int hammingWeight(int n) {
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
