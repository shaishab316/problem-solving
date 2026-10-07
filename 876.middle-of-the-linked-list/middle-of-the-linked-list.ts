import { ListNode } from "./utils";

// @lc code=start
function middleNode(head: ListNode | null): ListNode | null {
	if (!head) return null;

	let slowPointer: ListNode | null = head;
	let fastPointer: ListNode | null = head;

	while (fastPointer?.next) {
		slowPointer = slowPointer!.next;
		fastPointer = fastPointer.next.next;
	}

	return slowPointer;
}
// @lc code=end

console.log(middleNode(ListNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))); // [5,6,7,8,9,10]
console.log(middleNode(ListNode.fromArray([1, 2, 3, 4, 5]))); // [3,4,5]
console.log(middleNode(ListNode.fromArray([1, 2, 3, 4, 5, 6]))); // [4,5,6]
console.log(middleNode(ListNode.fromArray([1]))); // [1]
console.log(middleNode(null)); // null

/*
 * @lc app=leetcode id=876 lang=typescript
 *
 * [876] Middle of the Linked List
 *
 * https://leetcode.com/problems/middle-of-the-linked-list/description/
 *
 * algorithms
 * Easy (80.40%)
 * Likes:    12404
 * Dislikes: 409
 * Total Accepted:    2.5M
 * Total Submissions: 3M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the head of a singly linked list, return the middle node of the linked
 * list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we
 * return the second one.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [1, 100].
 * 1 <= Node.val <= 100
 *
 *
 */
