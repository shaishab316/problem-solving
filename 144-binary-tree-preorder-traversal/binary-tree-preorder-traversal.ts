import { TreeNode } from "./utils";

// @lc code=start
function preorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];

	function traverse(node: TreeNode | null) {
		if (node === null) return;

		result.push(node.val);
		traverse(node.left);
		traverse(node.right);
	}

	traverse(root);
	return result;
}
// @lc code=end

console.log(preorderTraversal(TreeNode.fromArray([1, null, 2, 3]))); // [1, 2, 3]
console.log(preorderTraversal(TreeNode.fromArray([1]))); // [1]
console.log(preorderTraversal(TreeNode.fromArray([1, 2]))); // [1, 2]
console.log(preorderTraversal(TreeNode.fromArray([1, null, 2]))); // [1, 2]
console.log(preorderTraversal(TreeNode.fromArray([]))); // []

/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (72.89%)
 * Likes:    8396
 * Dislikes: 222
 * Total Accepted:    2M
 * Total Submissions: 2.8M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the preorder traversal of its nodes'
 * values.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 *
 * Output: [1,2,3]
 *
 * Explanation:
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
 *
 * Output: [1,2,4,5,6,7,3,8,9]
 *
 * Explanation:
 *
 *
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 *
 * Output: []
 *
 *
 * Example 4:
 *
 *
 * Input: root = [1]
 *
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 *
 */
