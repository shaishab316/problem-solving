import { TreeNode } from './utils';

// @lc code=start
const SEPARATOR = ',';
const NULL = 'N';

function serialize(root: TreeNode | null): string {
	const result: string[] = [];

	function helper(node: TreeNode | null): void {
		if (!node) result.push(NULL);
		else {
			result.push(node.val.toString());
			helper(node.left);
			helper(node.right);
		}
	}

	helper(root);

	return result.join(SEPARATOR);
}

function deserialize(data: string): TreeNode | null {
	const values = data.split(SEPARATOR);
	let i = 0;

	function helper(): TreeNode | null {
		const value = values[i++];

		if (value === NULL) return null;

		const node = new TreeNode(+value);
		node.left = helper();
		node.right = helper();

		return node;
	}

	return helper();
}
// @lc code=end

console.log(
	deserialize(serialize(TreeNode.fromArray([1, 2, 3, null, null, 4, 5])))
); // [1,2,3,null,null,4,5]

/*
 * @lc app=leetcode id=297 lang=typescript
 *
 * [297] Serialize and Deserialize Binary Tree
 *
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (59.15%)
 * Likes:    10724
 * Dislikes: 417
 * Total Accepted:    1.1M
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network connection link to be reconstructed later in
 * the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree. There is no
 * restriction on how your serialization/deserialization algorithm should work.
 * You just need to ensure that a binary tree can be serialized to a string and
 * this string can be deserialized to the original tree structure.
 *
 * Clarification: The input/output format is the same as how LeetCode
 * serializes a binary tree. You do not necessarily need to follow this format,
 * so please be creative and come up with different approaches yourself.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^4].
 * -1000 <= Node.val <= 1000
 *
 *
 */
