// @lc code=start
class Solution {
    public int bitwiseComplement(int n) {
        if (n == 0) {
            return 1; // edge
        }

        int copy = n;
        int mask = 0;

        while (copy != 0) {
            mask = (mask << 1) | 1; // left shift
            copy >>= 1; // drop last bit
        }

        return n ^ mask; // invert it
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=1009 lang=java
 *
 * [1009] Complement of Base 10 Integer
 */
