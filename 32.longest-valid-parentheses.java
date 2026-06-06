
import java.util.ArrayDeque;
import java.util.Deque;

// @lc code=start
class Solution {
    public int longestValidParentheses(String s) {
        int max = 0;

        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(-1); // default base

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack.push(i);
            } else {
                stack.pop();

                if (stack.isEmpty()) {
                    stack.push(i); // new base
                } else {
                    max = Math.max(max, i - stack.peek());
                }
            }
        }

        return max;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=32 lang=java
 *
 * [32] Longest Valid Parentheses
 */