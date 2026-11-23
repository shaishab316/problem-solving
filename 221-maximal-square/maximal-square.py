class Solution:
    def maximalSquare(self, matrix: list[list[str]]) -> int:
        m = len(matrix)
        n = len(matrix[0])
        l = 0

        dp = [[0] * n for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if matrix[i][j] == "0":
                    continue

                top = dp[i - 1][j] if i > 0 else 0
                left = dp[i][j - 1] if j > 0 else 0
                diag = dp[i - 1][j - 1] if (i > 0 and j > 0) else 0

                curr = min([top, left, diag]) + 1
                dp[i][j] = curr
                l = max(l, curr)

        return l * l
