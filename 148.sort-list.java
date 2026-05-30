import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }

  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}

// @lc code=start
class Solution {
  public ListNode sortList(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }

    ListNode mid = findMid(head);
    ListNode rightHead = mid.next;

    mid.next = null; // split

    ListNode left = sortList(head);
    ListNode right = sortList(rightHead);

    return marge(left, right);
  }

  private ListNode findMid(ListNode head) {
    ListNode slow = head;
    ListNode fast = head.next;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  private ListNode marge(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;

    while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }

      curr = curr.next;
    }

    curr.next = l1 != null ? l1 : l2;

    return dummy.next;
  }

}
// @lc code=end

/**
 * 
 * 148. Sort List
 * 
 * Given the head of a linked list, return the list after sorting it in
 * ascending order.
 * 
 * 
 * Example 1:
 * 
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: head = [-1,5,3,4,0]
 * Output: [-1,0,3,4,5]
 * 
 */

/**
 * Array-based sorting
 *
 * class Solution {
 * public ListNode sortList(ListNode head) {
 * List<Integer> arrList = new ArrayList<>();
 * 
 * while (head != null) {
 * arrList.add(head.val);
 * 
 * head = head.next;
 * }
 * 
 * Collections.sort(arrList);
 * 
 * ListNode dummy = new ListNode(0);
 * ListNode curr = dummy;
 * 
 * for (Integer num : arrList) {
 * ListNode node = new ListNode(num);
 * 
 * curr.next = node;
 * curr = curr.next;
 * }
 * 
 * return dummy.next;
 * }
 * }
 */