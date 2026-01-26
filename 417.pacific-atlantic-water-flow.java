import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// @lc code=start
class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        List<List<Integer>> result = new ArrayList<>();

        // check valid
        if (heights == null || heights.length == 0 || heights[0].length == 0) {
            return result;
        }

        int rows = heights.length;
        int cols = heights[0].length;

        boolean[][] pacific = new boolean[rows][cols];
        boolean[][] atlantic = new boolean[rows][cols];

        // left-right visit
        for (int i = 0; i < rows; i++) {
            dfs(heights, pacific, i, 0, Integer.MIN_VALUE); // left
            dfs(heights, atlantic, i, cols - 1, Integer.MIN_VALUE); // right
        }

        // top-bottom visit
        for (int j = 0; j < cols; j++) {
            dfs(heights, pacific, 0, j, Integer.MIN_VALUE); // top
            dfs(heights, atlantic, rows - 1, j, Integer.MIN_VALUE); // bottom
        }

        // check
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                // check both ocean is visited
                if (pacific[i][j] && atlantic[i][j]) {
                    result.add(Arrays.asList(i, j));
                }
            }
        }

        return result;
    }

    private void dfs(int[][] heights, boolean[][] ocean, int row, int col, int prevHeight) {
        int rows = heights.length;
        int cols = heights[0].length;

        // check boundaries, and not visited
        if (row < 0 || row >= rows || col < 0 || col >= cols || ocean[row][col] || heights[row][col] < prevHeight) {
            return;
        }

        // mark as visited
        ocean[row][col] = true;

        dfs(heights, ocean, row - 1, col, heights[row][col]); // top
        dfs(heights, ocean, row + 1, col, heights[row][col]); // bottom
        dfs(heights, ocean, row, col - 1, heights[row][col]); // left
        dfs(heights, ocean, row, col + 1, heights[row][col]); // right
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=417 lang=java
 *
 * [417] Pacific Atlantic Water Flow
 */
