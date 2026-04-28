import java.util.ArrayList;

// @lc code=start
class Solution {

    private final Map<Character, String> digitToLetters = Map.of('2', "abc", '3', "def", '4', "ghi", '5', "jkl", '6',
            "mno", '7', "pqrs", '8', "tuv", '9', "wxyz");

    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();

        backtrack(result, digits, 0, "");

        return result;
    }

    private void backtrack(List<String> result, String digits, int digitIdx, String combination) {
        if (digitIdx == digits.length()) {
            result.add(combination);
            return;
        }

        char digit = digits.charAt(digitIdx);
        String letters = digitToLetters.get(digit);

        for (char letter : letters.toCharArray()) {
            backtrack(result, digits, digitIdx + 1, combination + letter);
        }
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=17 lang=java
 *
 * [17] Letter Combinations of a Phone Number
 */