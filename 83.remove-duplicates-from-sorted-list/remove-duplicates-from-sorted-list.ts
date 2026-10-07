import { ListNode } from "./utils/ListNode";

// @lc code=start
function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (!head?.next) return head;

	head.next = deleteDuplicates(head.next);

	return head.val === head.next?.val ? head.next : head;
}
// @lc code=end

console.log(deleteDuplicates(ListNode.fromArray([1, 1, 2, 3, 3]))); // [1,2,3]
console.log(deleteDuplicates(ListNode.fromArray([1, 1, 2, 3, 3, 3]))); // [1,2,3]
console.log(deleteDuplicates(ListNode.fromArray([1, 2, 3, 3, 4, 4, 5]))); // [1,2,3,4,5]
console.log(deleteDuplicates(ListNode.fromArray([1, 2, 3, 3, 4, 4, 5, 5]))); // [1,2,3,4,5]
console.log(deleteDuplicates(ListNode.fromArray([1, 2, 3, 3, 4, 4, 5, 5, 5]))); // [1,2,3,4,5]

/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (54.70%)
 * Likes:    9219
 * Dislikes: 337
 * Total Accepted:    1.9M
 * Total Submissions: 3.5M
 * Testcase Example:  '[1,1,2]'
 *
 * Given the head of a sorted linked list, delete all duplicates such that each
 * element appears only once. Return the linked list sorted as well.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
 *
 *
 */
