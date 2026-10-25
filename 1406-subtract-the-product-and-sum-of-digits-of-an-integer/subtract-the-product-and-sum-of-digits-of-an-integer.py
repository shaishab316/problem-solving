class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        prod = 1
        sm = 0

        for c in str(n):
            prod *= int(c)
            sm += int(c)

        return prod - sm
