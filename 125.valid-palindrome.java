// @lc code=start
class Solution {
    public boolean isPalindrome(String s) {
        char[] chList = s.toCharArray();
        int left = 0;
        int right = s.length() - 1;

        while (left <= right) {
            while (left < right && !Character.isLetterOrDigit(chList[left])) {
                left++;
            }

            while (left < right && !Character.isLetterOrDigit(chList[right])) {
                right--;
            }

            if (Character.toLowerCase(chList[left]) != Character.toLowerCase(chList[right])) {
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
 * @lc app=leetcode id=125 lang=java
 *
 * [125] Valid Palindrome
 */

// Solution 1
/*
 * class Solution {
 * public boolean isPalindrome(String s) {
 * List<Character> chList = new ArrayList<>();
 * 
 * for (char ch : s.toCharArray()) {
 * if (Character.isLetterOrDigit(ch)) {
 * chList.add(Character.toLowerCase(ch));
 * }
 * }
 * 
 * int n = chList.size();
 * 
 * for (int i = 0; i < n; i++) {
 * if (chList.get(i) != chList.get(n - 1 - i)) {
 * return false;
 * }
 * }
 * 
 * return true;
 * }
 * }
 */