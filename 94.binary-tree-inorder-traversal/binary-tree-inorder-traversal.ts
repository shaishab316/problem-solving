import { TreeNode } from "./utils";

// @lc code=start
function inorderTraversal(root: TreeNode | null): number[] {
	if (!root) return [];
	return [
		...inorderTraversal(root.left),
		root.val,
		...inorderTraversal(root.right),
	];
}
// @lc code=end

console.log(inorderTraversal(TreeNode.fromArray([1, null, 2, 3]))); // [1,3,2]
console.log(
	inorderTraversal(
		TreeNode.fromArray([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
	)
); // [4,2,6,5,7,1,3,9,8]
console.log(inorderTraversal(TreeNode.fromArray([]))); // []
console.log(inorderTraversal(TreeNode.fromArray([1]))); // [1]
console.log(inorderTraversal(null)); // []

/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (78.38%)
 * Likes:    14089
 * Dislikes: 839
 * Total Accepted:    3.1M
 * Total Submissions: 3.9M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes'
 * values.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 *
 * Output: [1,3,2]
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
 * Output: [4,2,6,5,7,1,3,9,8]
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
 */
