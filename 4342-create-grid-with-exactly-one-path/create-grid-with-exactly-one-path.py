class Solution:
    def createGrid(self, m: int, n: int) -> list[str]:
        res = [""] * m

        for i in range(m):
            p = ""

            if i == m - 1:
                p = "." * n
            else:
                p = "." + ("#" * (n - 1))

            res[i] = p

        return res
