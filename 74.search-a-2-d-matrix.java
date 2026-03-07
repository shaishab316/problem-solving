// @lc code=start
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        // ? note: start form top right
        int rowIdx = 0;
        int colIdx = cols - 1;

        while (rowIdx < rows && colIdx >= 0) {
            int current = matrix[rowIdx][colIdx];

            if (current < target) {
                rowIdx++;
            } else if (current > target) {
                colIdx--;
            } else {
                return true;
            }
        }

        return false;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=74 lang=java
 *
 * [74] Search a 2D Matrix
 */
