import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Queue;

// @lc code=start
class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        Map<Integer, List<Integer>> graph = new HashMap<>();

        for (int[] edge : edges) {
            if (!graph.containsKey(edge[0])) {
                graph.put(edge[0], new ArrayList<>());
            }
            if (!graph.containsKey(edge[1])) {
                graph.put(edge[1], new ArrayList<>());
            }
            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }

        Queue<Integer> queue = new ArrayDeque<>();
        boolean[] seen = new boolean[n];

        queue.add(source);
        seen[source] = true;

        while (!queue.isEmpty()) {
            int curr = queue.peek();
            queue.poll();

            if (curr == destination) {
                return true;
            }

            for (int path : graph.get(curr)) {
                if (!seen[path]) {
                    seen[path] = true;
                    queue.offer(path);
                }
            }
        }

        return false;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=1971 lang=java
 *
 * [1971] Find if Path Exists in Graph
 */