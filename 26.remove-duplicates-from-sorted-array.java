import java.util.*;

// @lc code=start
class Solution {
    public int removeDuplicates(int[] nums) {
        List<Integer> temp = new ArrayList<>();

        for (int num : nums) {
            if (temp.isEmpty() || temp.getLast() != num) {
                temp.add(num);
            }
        }

        for (int i = 0; i < temp.size(); i++) {
            nums[i] = temp.get(i);
        }

        return temp.size();
    }
}
// @lc code=end

/*
 * @lc app=leetcode id=26 lang=java
 *
 * [26] Remove Duplicates from Sorted Array
 */
