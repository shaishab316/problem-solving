// @lc code=start
function lexicalOrder(n: number): number[] {
	const result: number[] = [];

	let current = 1;
	for (let i = 0; i < n; i++) {
		result.push(current);
		if (current * 10 <= n) current *= 10;
		else {
			if (current >= n) current = (current / 10) | 0;
			current++;
			while (!(current % 10)) current /= 10;
		}
	}

	return result;
}
// @lc code=end

console.log(lexicalOrder(13)); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(lexicalOrder(2)); // [1,2]
console.log(lexicalOrder(3)); // [1,2,3]
console.log(lexicalOrder(4)); // [1,2,3,4]
console.log(lexicalOrder(5)); // [1,2,3,4,5]

/*
 * @lc app=leetcode id=386 lang=typescript
 *
 * [386] Lexicographical Numbers
 *
 * https://leetcode.com/problems/lexicographical-numbers/description/
 *
 * algorithms
 * Medium (73.09%)
 * Likes:    2828
 * Dislikes: 201
 * Total Accepted:    292.5K
 * Total Submissions: 394.7K
 * Testcase Example:  '13'
 *
 * Given an integer n, return all the numbers in the range [1, n] sorted in
 * lexicographical order.
 *
 * You must write an algorithm that runs in O(n) time and uses O(1) extra
 * space.
 *
 *
 * Example 1:
 * Input: n = 13
 * Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
 * Example 2:
 * Input: n = 2
 * Output: [1,2]
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 5 * 10^4
 *
 *
 */
