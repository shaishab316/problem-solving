
// @lc code=start
class Solution {
  public String minRemoveToMakeValid(String s) {
    int n = s.length();
    char[] sArr = s.toCharArray();

    int openParenthesesCount = 0;

    // ')' marking
    for (int i = 0; i < n; i++) {
      char ch = sArr[i];

      if (ch == '(') {
        openParenthesesCount++;
      } else if (ch == ')') {
        if (openParenthesesCount == 0) {
          sArr[i] = '*';
        } else {
          openParenthesesCount--;
        }
      }
    }

    // '(' marking
    for (int i = n - 1; i >= 0; i--) {
      if (openParenthesesCount > 0 && sArr[i] == '(') {
        openParenthesesCount--;
        sArr[i] = '*';
      }
    }

    int l = 0;

    // delete marked values
    for (int i = 0; i < n; i++) {
      if (sArr[i] != '*') {
        sArr[l++] = sArr[i];
      }
    }

    return new String(sArr).substring(0, l);
  }
}
// @lc code=ends