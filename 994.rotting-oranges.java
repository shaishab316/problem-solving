
import java.util.*;

// @lc code=start
class Solution {
    static final int EMPTY = 0;
    static final int FRESH = 1;
    static final int ROTTEN = 2;

    static int[][] dirs = {
            { 1, 0 }, // top
            { -1, 0 }, // bottom
            { 0, -1 }, // left
            { 0, 1 } // right
    };

    public int orangesRotting(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        Queue<int[]> queue = new ArrayDeque<>();
        int fresh = 0;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                int curr = grid[i][j];

                switch (curr) {
                    case FRESH:
                        fresh++;
                        break;

                    case ROTTEN:
                        queue.add(new int[] { i, j });
                        break;

                    // ? no need for empty cell
                }
            }
        }

        if (fresh == 0) {
            // ? no fresh oranges to rot
            return 0;
        }

        int time = 0;

        // ? until has fresh and rot
        while (!queue.isEmpty() && fresh > 0) {
            time++;
            int n = queue.size();

            // ? batch bfs travel
            for (int i = 0; i < n; i++) {
                int[] curr = queue.poll();

                for (int[] dir : dirs) {
                    int r = curr[0] + dir[0]; // ? 0 means i
                    int c = curr[1] + dir[1]; // ? 1 means j

                    // ? check valid arr boundary and its fresh to rot
                    if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] == FRESH) {
                        grid[r][c] = ROTTEN; // become rotten
                        fresh--; // become rotten
                        queue.offer(new int[] { r, c }); // add new rotten oranges
                    }
                }
            }
        }

        // ? if there is not rotten return -1 else time
        return fresh == 0 ? time : -1;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=994 lang=java
 *
 * [994] Rotting Oranges
 */
