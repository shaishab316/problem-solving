import { ListNode } from "./utils";

// @lc code=start
function hasCycle(head: ListNode | null): boolean {
	if (!head?.next) return false;

	let slowPointer: ListNode | null = head;
	let fastPointer: ListNode | null = head.next;

	while (slowPointer !== fastPointer) {
		if (!fastPointer?.next) return false;
		slowPointer = slowPointer!.next;
		fastPointer = fastPointer.next.next;
	}

	return true;
}
// @lc code=end

console.log(hasCycle(ListNode.fromArray([3, 2, 0, -4]))); // true
console.log(hasCycle(ListNode.fromArray([1, 2, 3, 4, 5]))); // false
console.log(hasCycle(ListNode.fromArray([1]))); // false
console.log(hasCycle(null)); // false
console.log(hasCycle(ListNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))); // true

/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 *
 * https://leetcode.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (52.36%)
 * Likes:    16447
 * Dislikes: 1500
 * Total Accepted:    3.9M
 * Total Submissions: 7.5M
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * Given head, the head of a linked list, determine if the linked list has a
 * cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can
 * be reached again by continuously following the next pointer. Internally, pos
 * is used to denote the index of the node that tail's next pointer is
 * connected to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return
 * false.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to
 * the 1st node (0-indexed).
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to
 * the 0th node.
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of the nodes in the list is in the range [0, 10^4].
 * -10^5 <= Node.val <= 10^5
 * pos is -1 or a valid index in the linked-list.
 *
 *
 *
 * Follow up: Can you solve it using O(1) (i.e. constant) memory?
 *
 */
