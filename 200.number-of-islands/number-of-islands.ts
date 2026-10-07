// @lc code=start
function numIslands(grid: string[][]): number {
	if (!grid?.length) return 0;

	let result = 0;
	const rows = grid.length;
	const cols = grid[0].length;

	function helper(row: number, col: number): void {
		if (grid?.[row]?.[col] !== '1') return;

		grid[row][col] = '0'; // fill with water
		helper(row - 1, col); // up
		helper(row + 1, col); // down
		helper(row, col - 1); // left
		helper(row, col + 1); // right
	}

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (grid[row][col] === '1') {
				result++; // island found
				helper(row, col);
			}
		}
	}

	return result;
}
// @lc code=end

console.log(
	numIslands([
		['1', '1', '1', '1', '0'],
		['1', '1', '0', '1', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0'],
	])
); // 1

console.log(
	numIslands([
		['1', '1', '0', '0', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '1', '0', '0'],
		['0', '0', '0', '1', '1'],
	])
); // 3

/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (62.51%)
 * Likes:    24010
 * Dislikes: 574
 * Total Accepted:    3.5M
 * Total Submissions: 5.7M
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are
 * all surrounded by water.
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 300
 * grid[i][j] is '0' or '1'.
 *
 *
 */
