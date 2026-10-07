import { TreeNode } from "./utils";

// @lc code=start
function binaryTreePaths(root: TreeNode | null): string[] {
	const result: string[] = [];

	function traverse(node: TreeNode | null, path: string) {
		if (!node) return;

		path += node.val.toString();

		if (!node.left && !node.right) {
			result.push(path);
			return;
		}

		path += "->";

		traverse(node.left, path);
		traverse(node.right, path);
	}

	traverse(root, "");

	return result;
}
// @lc code=end

console.log(binaryTreePaths(TreeNode.fromArray([1, 2, 3, null, 5]))); // ["1->2->5","1->3"]
console.log(binaryTreePaths(TreeNode.fromArray([1]))); // ["1"]
console.log(binaryTreePaths(null)); // []
console.log(binaryTreePaths(TreeNode.fromArray([1, 2]))); // ["1->2"]
console.log(binaryTreePaths(TreeNode.fromArray([1, null, 2, 3]))); // ["1->2->3"]

/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (66.28%)
 * Likes:    6880
 * Dislikes: 325
 * Total Accepted:    860.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any
 * order.
 *
 * A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: ["1"]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 100].
 * -100 <= Node.val <= 100
 *
 *
 */
