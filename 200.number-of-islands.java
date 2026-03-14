// @lc code=start
class Solution {
    public int numIslands(char[][] grid) {
        // edge
        if (grid == null || grid.length == 0) {
            return 0;
        }

        int m = grid.length;
        int n = grid[0].length;

        int island = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1') {
                    island++;
                    dfs(grid, i, j);
                }
            }
        }

        return island;
    }

    private void dfs(char[][] grid, int i, int j) {
        // check boundaries and if curr is land
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {
            return;
        }

        // make as visited
        grid[i][j] = '0';

        dfs(grid, i - 1, j); // top
        dfs(grid, i + 1, j); // bottom
        dfs(grid, i, j - 1); // left
        dfs(grid, i, j + 1); // right
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=200 lang=java
 *
 * [200] Number of Islands
 */