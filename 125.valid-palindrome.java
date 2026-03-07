import java.util.ArrayList;
import java.util.List;

// @lc code=start
class Solution {
    public boolean isPalindrome(String s) {
        List<Character> chList = new ArrayList<>();

        for (char ch : s.toCharArray()) {
            if (Character.isLetterOrDigit(ch)) {
                chList.add(Character.toLowerCase(ch));
            }
        }

        int n = chList.size();

        for (int i = 0; i < n; i++) {
            if (chList.get(i) != chList.get(n - 1 - i)) {
                return false;
            }
        }

        return true;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=125 lang=java
 *
 * [125] Valid Palindrome
 */