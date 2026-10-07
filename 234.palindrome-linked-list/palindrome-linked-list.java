import java.util.ArrayList;
import java.util.List;

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
    public boolean isPalindrome(ListNode head) {
        List<Integer> nums = new ArrayList<>();

        while (head != null) {
            nums.add(head.val);
            head = head.next;
        }

        int left = 0;
        int right = nums.size() - 1;

        while (left <= right) {
            if (nums.get(left) != nums.get(right)) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=234 lang=java
 *
 * [234] Palindrome Linked List
 */