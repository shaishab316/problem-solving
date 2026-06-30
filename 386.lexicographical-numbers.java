import java.util.ArrayList;
import java.util.List;

// @lc code=start
class Solution {
    private int n;

    private List<Integer> result;

    public List<Integer> lexicalOrder(int n) {
        this.n = n;
        this.result = new ArrayList<>();

        for (int i = 1; i <= 9; i++) {
            if (i > n) {
                break;
            }

            dfs(i);
        }

        return result;
    }

    private void dfs(int curr) {
        result.add(curr);

        for (int i = 0; i <= 9; i++) {
            int next = curr * 10 + i;

            if (next > this.n) {
                return;
            }

            dfs(next);
        }

    }
}
// @lc code=end

/*
 * @lc app=leetcode id=386 lang=java
 *
 * [386] Lexicographical Numbers
 */