import { TreeNode } from "./utils";

// @lc code=start
function kthSmallest(root: TreeNode | null, k: number): number {
	let count = 0;
	let result = 0;

	(function inOrder(node: TreeNode | null) {
		if (!node || count >= k) return;
		inOrder(node.left);
		if (++count === k) return (result = node.val);
		inOrder(node.right);
	})(root);

	return result;
}
// @lc code=end

console.log(kthSmallest(TreeNode.fromArray([3, 1, 4, null, 2]), 1)); // 1
console.log(kthSmallest(TreeNode.fromArray([5, 3, 6, 2, 4, null, null, 1]), 3)); // 3
console.log(kthSmallest(null, 1)); // 0
console.log(kthSmallest(TreeNode.fromArray([]), 1)); // 0
console.log(kthSmallest(TreeNode.fromArray([1]), 1)); // 1

/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
 *
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
 *
 * algorithms
 * Medium (75.21%)
 * Likes:    12086
 * Dislikes: 243
 * Total Accepted:    1.9M
 * Total Submissions: 2.5M
 * Testcase Example:  '[3,1,4,null,2]\n1'
 *
 * Given the root of a binary search tree, and an integer k, return the k^th
 * smallest value (1-indexed) of all the values of the nodes in the tree.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 * Output: 3
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is n.
 * 1 <= k <= n <= 10^4
 * 0 <= Node.val <= 10^4
 *
 *
 *
 * Follow up: If the BST is modified often (i.e., we can do insert and delete
 * operations) and you need to find the kth smallest frequently, how would you
 * optimize?
 *
 */
