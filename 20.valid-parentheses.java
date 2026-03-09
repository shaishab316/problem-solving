import java.util.*;

// @lc code=start
class Solution {
    public boolean isValid(String str) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> mp = Map.of(
                ')', '(',
                '}', '{',
                ']', '[');

        for (char ch : str.toCharArray()) {
            if (mp.containsKey(ch)) {
                if (stack.isEmpty() || stack.pop() != mp.get(ch)) {
                    return false;
                }
            } else {
                stack.push(ch);
            }
        }

        return stack.isEmpty();
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=20 lang=java
 *
 * [20] Valid Parentheses
 */
