class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: list[list[int]]) -> int:
        m, n = len(obstacleGrid), len(obstacleGrid[0])

        if obstacleGrid[0][0] or obstacleGrid[m - 1][n - 1]:
            return 0

        dp = [[0] * n for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if not obstacleGrid[i][j]:
                    up = dp[i - 1][j] if i > 0 else 0
                    left = dp[i][j - 1] if j > 0 else 0

                    dp[i][j] = 1 if not i and not j else up + left

        return dp[m - 1][n - 1]
