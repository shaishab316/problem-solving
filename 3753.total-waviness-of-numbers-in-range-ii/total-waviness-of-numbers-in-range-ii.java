import java.util.HashMap;

// @lc code=start
class Solution {
    Map<String, long[]> map;

    public long totalWaviness(long num1, long num2) {
        return getWaves(num2) - getWaves(num1 - 1);
    }

    private long getWaves(long num) {
        if (num < 100) {
            return 0L;
        }

        String s = Long.toString(num);

        map = new HashMap<>();

        long ans[] = dfs(s, 0, -1, -1, true, true);

        return ans[1];

    }

    private long[] dfs(
            String s, int idx, int towBefore, int oneBefore, boolean isBound, boolean leadingZero) {

        // base case
        if (idx == s.length()) {
            return leadingZero ? new long[] { 0L, 0L } : new long[] { 1L, 0L };
        }

        String key = idx + "#" + towBefore + "#" + oneBefore + "#" + isBound + "#" + leadingZero;

        if (map.containsKey(key)) {
            return map.get(key);
        }

        int lower = 0;
        int upper = isBound ? (s.charAt(idx) - '0') : 9;

        long totalCount = 0L;
        long totalWaves = 0L;

        for (int i = 0; i <= upper; i++) {
            long waves = 0L;
            int nextTwoBefore, nextOneBefore;

            if (leadingZero) {
                nextTwoBefore = -1;
                nextOneBefore = (i == 0) ? -1 : i;
            } else {
                nextTwoBefore = oneBefore;
                nextOneBefore = i;

                if (towBefore >= 0 && oneBefore >= 0) {
                    if ((oneBefore > towBefore && oneBefore > i) || (oneBefore < towBefore && oneBefore < i)) {
                        waves = 1;
                    }
                }
            }

            boolean nextBound = isBound && (i == upper);
            boolean nextLeadingZero = leadingZero && (i == 0);

            long[] ans = dfs(s, idx + 1, nextTwoBefore, nextOneBefore, nextBound, nextLeadingZero);

            totalCount += ans[0];
            totalWaves += ans[1] + ans[0] * waves;
        }

        long[] result = { totalCount, totalWaves };

        map.put(key, result);

        return result;
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=3753 lang=java
 *
 * [3753] Total Waviness of Numbers in Range II
 */