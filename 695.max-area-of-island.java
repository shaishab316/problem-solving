// @lc code=start
class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        if (grid == null || grid.length == 0) {
            return 0;
        }

        int m = grid.length;
        int n = grid[0].length;

        int max = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    int area = dfs(grid, i, j);

                    max = Math.max(max, area);
                }
            }
        }

        return max;
    }

    private int dfs(int[][] grid, int i, int j) {
        // check boundaries and if curr island
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == 0) {
            return 0;
        }

        // make as visited
        grid[i][j] = 0;

        int area = 1; // current

        area += dfs(grid, i - 1, j); // top
        area += dfs(grid, i + 1, j); // bottom
        area += dfs(grid, i, j - 1); // left
        area += dfs(grid, i, j + 1); // right

        return area;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=695 lang=java
 *
 * [695] Max Area of Island
 */