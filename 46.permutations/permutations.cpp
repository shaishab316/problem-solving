#include <bits/stdc++.h>
using namespace std;

// @lc code=start
class Solution
{
public:
    vector<vector<int>> permute(vector<int> &nums)
    {
        vector<vector<int>> result;

        helper(0, nums, result);

        return result;
    }

    void helper(int start, vector<int> &nums, vector<vector<int>> &result)
    {
        if (start == nums.size())
        {
            result.push_back(nums);
            return;
        }

        for (int i = start; i < nums.size(); i++)
        {
            swap(nums[i], nums[start]);
            helper(start + 1, nums, result);
            swap(nums[i], nums[start]);
        }
    }
};
// @lc code=end

/*
 * @lc app=leetcode id=46 lang=cpp
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (80.79%)
 * Likes:    20150
 * Dislikes: 364
 * Total Accepted:    2.7M
 * Total Submissions: 3.3M
 * Testcase Example:  '[1,2,3]'
 *
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 *
 *
 */
