// @lc code=start
function hammingWeight(n: number): number {
	let count = 0;

	while (n) {
		n &= n - 1;
		count++;
	}

	return count;
}
// @lc code=end

console.log(hammingWeight(10)); // 2

/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 *
 * https://leetcode.com/problems/number-of-1-bits/description/
 *
 * algorithms
 * Easy (74.38%)
 * Likes:    6882
 * Dislikes: 1352
 * Total Accepted:    1.8M
 * Total Submissions: 2.5M
 * Testcase Example:  '11'
 *
 * Given a positive integer n, write a function that returns the number of set
 * bits in its binary representation (also known as the Hamming weight).
 *
 *
 * Example 1:
 *
 *
 * Input: n = 11
 *
 * Output: 3
 *
 * Explanation:
 *
 * The input binary string 1011 has a total of three set bits.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 128
 *
 * Output: 1
 *
 * Explanation:
 *
 * The input binary string 10000000 has a total of one set bit.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 2147483645
 *
 * Output: 30
 *
 * Explanation:
 *
 * The input binary string 1111111111111111111111111111101 has a total of
 * thirty set bits.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 2^31 - 1
 *
 *
 *
 * Follow up: If this function is called many times, how would you optimize it?
 */
