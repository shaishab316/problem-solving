// @lc code=start
function reverseBits(n: number): number {
	// let bitSize = Math.max(1, Math.log2(n || 1) | 0) + 1;
	let bitSize = 32; // here told fix bitSize = 32
	let result = 0;

	while (bitSize--) {
		result = (result << 1) | (n & 1);
		n >>= 1;
	}

	return result;
}
// @lc code=end

const n = 43261596;
let bitSize = Math.max(1, Math.log2(n || 1) | 0) + 1;

console.log({
	input: {
		[n]: n.toString(2).padStart(bitSize, '0'),
	},
});
console.log({
	output: {
		[reverseBits(n)]: reverseBits(n).toString(2).padStart(bitSize, '0'),
	},
});

/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 *
 * https://leetcode.com/problems/reverse-bits/description/
 *
 * algorithms
 * Easy (63.48%)
 * Likes:    5408
 * Dislikes: 1622
 * Total Accepted:    1M
 * Total Submissions: 1.6M
 * Testcase Example:  '43261596'
 *
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * Note:
 *
 *
 * Note that in some languages, such as Java, there is no unsigned integer
 * type. In this case, both input and output will be given as a signed integer
 * type. They should not affect your implementation, as the integer's internal
 * binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement
 * notation. Therefore, in Example 2 below, the input represents the signed
 * integer -3 and the output represents the signed integer -1073741825.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 43261596
 *
 * Output: 964176192
 *
 * Explanation:
 *
 *
 *
 *
 * Integer
 * Binary
 *
 *
 * 43261596
 * 00000010100101000001111010011100
 *
 *
 * 964176192
 * 00111001011110000010100101000000
 *
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: n = 2147483644
 *
 * Output: 1073741822
 *
 * Explanation:
 *
 *
 *
 *
 * Integer
 * Binary
 *
 *
 * 2147483644
 * 01111111111111111111111111111100
 *
 *
 * 1073741822
 * 00111111111111111111111111111110
 *
 *
 *
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 2^31 - 2
 * n is even.
 *
 *
 *
 * Follow up: If this function is called many times, how would you optimize it?
 *
 */
