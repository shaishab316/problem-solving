import { ListNode } from "./utils";

// @lc code=start
function reverseList(head: ListNode | null): ListNode | null {
	if (!head?.next) return head;

	const newHead = reverseList(head.next);

	head.next.next = head;
	head.next = null;

	return newHead;
}
// @lc code=end

console.log(reverseList(ListNode.fromArray([1, 2, 3, 4, 5]))); // [5,4,3,2,1]
console.log(reverseList(ListNode.fromArray([1, 2]))); // [2,1]
console.log(reverseList(ListNode.fromArray([]))); // []
console.log(reverseList(ListNode.fromArray([1]))); // [1]
console.log(reverseList(ListNode.fromArray([1, 2, 3]))); // [3,2,1]

/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (79.01%)
 * Likes:    22897
 * Dislikes: 528
 * Total Accepted:    5.2M
 * Total Submissions: 6.6M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2]
 * Output: [2,1]
 *
 *
 * Example 3:
 *
 *
 * Input: head = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 *
 *
 *
 * Follow up: A linked list can be reversed either iteratively or recursively.
 * Could you implement both?
 *
 */
