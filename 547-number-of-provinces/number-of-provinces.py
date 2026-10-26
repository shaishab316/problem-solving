class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        seen = [False] * n
        total = 0

        def dfs(city):
            seen[city] = True

            for neb, connected in enumerate(isConnected[city]):
                if connected == 1 and not seen[neb]:
                    dfs(neb)

        for i in range(n):
            if not seen[i]:
                total += 1
                dfs(i)

        return total
