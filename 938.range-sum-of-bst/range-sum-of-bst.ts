import { TreeNode } from './utils';

// @lc code=start
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
	let sum = 0;
	if (!root) return sum;

	function traveler(node: TreeNode) {
		if (low <= node.val && node.val <= high) sum += node.val;
		if (node.left) traveler(node.left);
		if (node.right) traveler(node.right);
	}

	traveler(root);

	return sum;
}
// @lc code=end

console.log(
	rangeSumBST(TreeNode.fromArray([10, 5, 15, 3, 7, null, 18]), 7, 15)
); // 32

console.log(
	rangeSumBST(TreeNode.fromArray([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 6, 10)
); // 23

/*
 * @lc app=leetcode id=938 lang=typescript
 *
 * [938] Range Sum of BST
 *
 * https://leetcode.com/problems/range-sum-of-bst/description/
 *
 * algorithms
 * Easy (87.43%)
 * Likes:    7110
 * Dislikes: 385
 * Total Accepted:    1.2M
 * Total Submissions: 1.4M
 * Testcase Example:  '[10,5,15,3,7,null,18]\n7\n15'
 *
 * Given the root node of a binary search tree and two integers low and high,
 * return the sum of values of all nodes with a value in the inclusive range
 * [low, high].
 *
 *
 * Example 1:
 *
 *
 * Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 * Output: 32
 * Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 =
 * 32.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
 * Output: 23
 * Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 =
 * 23.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 2 * 10^4].
 * 1 <= Node.val <= 10^5
 * 1 <= low <= high <= 10^5
 * All Node.val are unique.
 *
 *
 */
