// @lc code=start
function generate(numRows: number): number[][] {
	const triangle: number[][] = [];

	for (let i = 0; i < numRows; i++) {
		const row: number[] = new Array(i + 1).fill(1);

		for (let j = 1; j < i; j++) {
			row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
		}

		triangle.push(row);
	}

	return triangle;
}
// @lc code=end

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
console.log(generate(0)); // []
console.log(generate(2)); // [[1],[1,1]]
console.log(generate(3)); // [[1],[1,1],[1,2,1]]

/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (76.81%)
 * Likes:    13738
 * Dislikes: 509
 * Total Accepted:    2.1M
 * Total Submissions: 2.7M
 * Testcase Example:  '5'
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= numRows <= 30
 *
 *
 */
