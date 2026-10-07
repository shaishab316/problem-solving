// @note: a ^ b = c, a ^ c = b, b ^ c = a

// @lc code=start
function findArray(pref: number[]): number[] {
	const result = [pref[0]];

	for (let i = 1; i < pref.length; i++) result.push(pref[i] ^ pref[i - 1]);

	return result;
}
// @lc code=end

console.log(findArray([5, 2, 0, 3, 1])); // [5,7,2,3,2]

/*
 * @lc app=leetcode id=2433 lang=typescript
 *
 * [2433] Find The Original Array of Prefix Xor
 *
 * https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/
 *
 * algorithms
 * Medium (88.08%)
 * Likes:    1451
 * Dislikes: 88
 * Total Accepted:    170.2K
 * Total Submissions: 193.2K
 * Testcase Example:  '[5,2,0,3,1]'
 *
 * You are given an integer array pref of size n. Find and return the array arr
 * of size n that satisfies:
 *
 *
 * pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
 *
 *
 * Note that ^ denotes the bitwise-xor operation.
 *
 * It can be proven that the answer is unique.
 *
 *
 * Example 1:
 *
 *
 * Input: pref = [5,2,0,3,1]
 * Output: [5,7,2,3,2]
 * Explanation: From the array [5,7,2,3,2] we have the following:
 * - pref[0] = 5.
 * - pref[1] = 5 ^ 7 = 2.
 * - pref[2] = 5 ^ 7 ^ 2 = 0.
 * - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
 * - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.
 *
 *
 * Example 2:
 *
 *
 * Input: pref = [13]
 * Output: [13]
 * Explanation: We have pref[0] = arr[0] = 13.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= pref.length <= 10^5
 * 0 <= pref[i] <= 10^6
 *
 *
 */
