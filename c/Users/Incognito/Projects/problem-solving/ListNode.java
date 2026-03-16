import java.util.ArrayList;
import java.util.List;

class ListNode {
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
    List<Integer> list;

    public Solution(ListNode head) {
        list = new ArrayList<>();

        while (head != null) {
            list.add(head.val);
            head = head.next;
        }
    }

    public int getRandom() {
        int n = list.size();

        int idx = (int) (Math.random() * n);

        return list.get(idx);
    }
}
// @lc code=end

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(head);
 * int param_1 = obj.getRandom();
 */

/*
 * @lc app=leetcode id=382 lang=java
 *
 * [382] Linked List Random Node
 */