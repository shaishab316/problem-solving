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
    List<Integer> arrList = new ArrayList<>();

    while (head != null) {
      arrList.add(head.val);

      head = head.next;
    }

    Collections.sort(arrList);

    ListNode dummy = new ListNode(0);
    ListNode curr = dummy;

    for (Integer num : arrList) {
      ListNode node = new ListNode(num);

      curr.next = node;
      curr = curr.next;
    }

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