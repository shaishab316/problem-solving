// @lc code=start
function solveSudoku(board: string[][]): void {
	function solve(): boolean {
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (board[i][j] === ".") {
					for (let c = 1; c <= 9; c++) {
						if (isValid(i, j, c.toString())) {
							board[i][j] = c.toString();
							if (solve()) return true;
							board[i][j] = "."; // backtrack
						}
					}
					return false;
				}
			}
		}
		return true;
	}

	function isValid(row: number, col: number, num: string): boolean {
		for (let i = 0; i < 9; i++) {
			// Check row, column, grid
			if (
				board[row][i] === num ||
				board[i][col] === num ||
				board[3 * ((row / 3) | 0) + ((i / 3) | 0)][
					3 * ((col / 3) | 0) + (i % 3)
				] === num
			)
				return false;
		}
		return true;
	}

	solve();
}
// @lc code=end
let sudoku = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(sudoku);

console.log(sudoku); /*
[
	["5", "3", "4", "6", "7", "8", "9", "1", "2"],
	["6", "7", "2", "1", "9", "5", "3", "4", "8"],
	["1", "9", "8", "3", "4", "2", "5", "6", "7"],
	["8", "5", "9", "7", "6", "1", "4", "2", "3"],
	["4", "2", "6", "8", "5", "3", "7", "9", "1"],
	["7", "1", "3", "9", "2", "4", "8", "5", "6"],
	["9", "6", "1", "5", "3", "7", "2", "8", "4"],
	["2", "8", "7", "4", "1", "9", "6", "3", "5"],
	["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];
*/
/*
 * @lc app=leetcode id=37 lang=typescript
 *
 * [37] Sudoku Solver
 *
 * https://leetcode.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (63.76%)
 * Likes:    10226
 * Dislikes: 297
 * Total Accepted:    780.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 *
 * A sudoku solution must satisfy all of the following rules:
 *
 *
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the digits 1-9 must occur exactly once in each of the 9 3x3
 * sub-boxes of the grid.
 *
 *
 * The '.' character indicates empty cells.
 *
 *
 * Example 1:
 *
 *
 * Input: board =
 * [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
 * Output:
 * [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
 * Explanation: The input board is shown above and the only valid solution is
 * shown below:
 *
 *
 *
 *
 *
 * Constraints:
 *
 *
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit or '.'.
 * It is guaranteed that the input board has only one solution.
 *
 *
 */
