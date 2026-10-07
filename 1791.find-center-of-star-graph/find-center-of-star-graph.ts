// @lc code=start
function findCenter(edges: number[][]): number {
	const [firstEdge, secondEdge] = edges[0];

	return edges[1].includes(firstEdge) ? firstEdge : secondEdge;
}
// @lc code=end

console.log(
	findCenter([
		[1, 2],
		[2, 3],
		[4, 2],
	])
); // 2
console.log(
	findCenter([
		[1, 2],
		[5, 1],
		[1, 3],
		[1, 4],
	])
); // 1
console.log(
	findCenter([
		[2, 3],
		[4, 5],
		[6, 7],
		[8, 9],
		[9, 10],
		[10, 1],
		[1, 2],
	])
); // 1
console.log(
	findCenter([
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 1],
		[1, 5],
	])
); // 4
console.log(
	findCenter([
		[1, 2],
		[2, 3],
		[4, 2],
	])
); // 2

/*
 * @lc app=leetcode id=1791 lang=typescript
 *
 * [1791] Find Center of Star Graph
 *
 * https://leetcode.com/problems/find-center-of-star-graph/description/
 *
 * algorithms
 * Easy (86.60%)
 * Likes:    1883
 * Dislikes: 181
 * Total Accepted:    390.7K
 * Total Submissions: 451K
 * Testcase Example:  '[[1,2],[2,3],[4,2]]'
 *
 * There is an undirected star graph consisting of n nodes labeled from 1 to n.
 * A star graph is a graph where there is one center node and exactly n - 1
 * edges that connect the center node with every other node.
 *
 * You are given a 2D integer array edges where each edges[i] = [ui, vi]
 * indicates that there is an edge between the nodes ui and vi. Return the
 * center of the given star graph.
 *
 *
 * Example 1:
 *
 *
 * Input: edges = [[1,2],[2,3],[4,2]]
 * Output: 2
 * Explanation: As shown in the figure above, node 2 is connected to every
 * other node, so 2 is the center.
 *
 *
 * Example 2:
 *
 *
 * Input: edges = [[1,2],[5,1],[1,3],[1,4]]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= n <= 10^5
 * edges.length == n - 1
 * edges[i].length == 2
 * 1 <= ui, vi <= n
 * ui != vi
 * The given edges represent a valid star graph.
 *
 *
 */
