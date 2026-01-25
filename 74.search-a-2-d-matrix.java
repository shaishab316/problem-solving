// @lc code=start
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        // start with top right conner
        int rowIdx = 0;
        int colIdx = cols - 1;

        while (rowIdx < rows && colIdx >= 0) {
            int num = matrix[rowIdx][colIdx];

            if (num == target) {
                return true;
            } else if (num < target) {
                rowIdx++;
            } else {
                colIdx--;
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
