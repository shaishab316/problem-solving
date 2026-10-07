// @lc code=start
function getRow(rowIndex: number): number[] {
	let row = [1];

	for (let i = 1; i <= rowIndex; i++) {
		row.push((row[i - 1] * (rowIndex - i + 1)) / i);
	}

	return row;
}
// @lc code=end

console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1,1]
console.log(getRow(2)); // [1,2,1]
console.log(getRow(3)); // [1,3,3,1]
console.log(getRow(4)); // [1,4,6,4,1]

/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (65.79%)
 * Likes:    5035
 * Dislikes: 358
 * Total Accepted:    1M
 * Total Submissions: 1.6M
 * Testcase Example:  '3'
 *
 * Given an integer rowIndex, return the rowIndex^th (0-indexed) row of the
 * Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 * Example 2:
 * Input: rowIndex = 0
 * Output: [1]
 * Example 3:
 * Input: rowIndex = 1
 * Output: [1,1]
 *
 *
 * Constraints:
 *
 *
 * 0 <= rowIndex <= 33
 *
 *
 *
 * Follow up: Could you optimize your algorithm to use only O(rowIndex) extra
 * space?
 *
 */
