class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        parant = list(range(n))
        rank = [0] * n
        count = n

        def find(x):
            if parant[x] != x:
                parant[x] = find(parant[x])

            return parant[x]

        def union(x, y):
            root_x = find(x)
            root_y = find(y)

            if root_x == root_y:
                return False

            if rank[root_x] < rank[root_y]:
                root_x, root_y = root_y, root_x

            parant[root_y] = root_x

            if rank[root_x] == rank[root_y]:
                root_x += 1

            return True

        for i in range(n):
            for j in range(i + 1, n):
                if isConnected[i][j]:
                    if union(i, j):
                        count -= 1

        return count
