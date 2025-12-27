import java.util.*;

// @lc code=start
class Solution {
    public boolean isValid(String str) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> map = new HashMap<>();

        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');

        for (char ch : str.toCharArray()) {
            if (map.containsKey(ch)) {
                if (stack.isEmpty() || stack.pop() != map.get(ch)) {
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
