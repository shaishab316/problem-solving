
// @lc code=start
class Solution {
    public int getSum(int a, int b) {
        while (b != 0) {
            /**
             * curry = (a and b)
             * sum = (a xor b)
             * 3 = 11
             * 2 = 10
             * 5 = 101
             * 
             * it 1:
             * curry = 1 and 0 = 0
             * sum = 1 xor 0 = 1
             * 
             * it 2:
             * curry = 1 and 1 = 1
             * sum = 1 xor 1 = 0
             * 
             * it 3:
             * place lading curry
             * curry = 0 and 1 = 0
             * sum = 0 xor 1 = 1
             * 
             * 
             * finally : 1 0 1
             */

            int curry = (a & b) << 1;
            a = a ^ b;
            b = curry;
        }

        return a;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=371 lang=java
 *
 * [371] Sum of Two Integers
 */
