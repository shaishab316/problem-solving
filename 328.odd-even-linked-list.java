
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
  public ListNode oddEvenList(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }

    boolean isEven = false;

    ListNode odd = new ListNode(0);
    ListNode even = new ListNode(0);

    ListNode lastOdd = odd;
    ListNode lastEven = even;

    while (head != null) {
      if (isEven) {
        lastEven.next = new ListNode(head.val);
        lastEven = lastEven.next;
      } else {
        lastOdd.next = new ListNode(head.val);
        lastOdd = lastOdd.next;
      }

      head = head.next;
      isEven = !isEven;
    }

    lastOdd.next = even.next;

    return odd.next;
  }
}
// @lc code=end

/**
 * 328. Odd Even Linked List
 * 
 * Given the head of a singly linked list, group all the nodes with odd indices
 * together followed by the nodes with even indices, and return the reordered
 * list.
 * 
 * The first node is considered odd, and the second node is even, and so on.
 * 
 * Note that the relative order inside both the even and odd groups should
 * remain as it was in the input.
 * 
 * You must solve the problem in O(1) extra space complexity and O(n) time
 * complexity.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: head = [1,2,3,4,5]
 * Output: [1,3,5,2,4]
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: head = [2,1,3,5,6,4,7]
 * Output: [2,3,6,7,1,5,4]
 * 
 */