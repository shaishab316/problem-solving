import java.util.ArrayList;
import java.util.List;

// @lc code=start
class Solution {
    public int[] rotateElements(int[] nums, int k) {
        List<Integer> nonNegative = new ArrayList<>();
        for (int num : nums) {
            if (num >= 0) {
                nonNegative.add(num);
            }
        }
        int m = nonNegative.size();

        if (m == 0) {
            // ? no nagitive,
            return nums;
        }

        int shift = k % m;
        List<Integer> rotatedArr = new ArrayList<>();
        for (int i = shift; i < m; i++) {
            // ? add k rotated array elements
            rotatedArr.add(nonNegative.get(i));
        }

        for (int i = 0; i < shift; i++) {
            // ? add lading before k
            rotatedArr.add(nonNegative.get(i));
        }

        int idx = 0;
        // ? now rotated original array with k position
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] >= 0) {
                nums[i] = rotatedArr.get(idx++);
            }
        }

        return nums;
    }
}
// @lc code=end

// ?
// https://leetcode.com/contest/weekly-contest-486/problems/rotate-non-negative-elements