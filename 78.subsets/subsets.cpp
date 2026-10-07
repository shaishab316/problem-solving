#include <bits/stdc++.h>;
using namespace std;

// @lc code=start
class Solution
{
public:
    vector<vector<int>> subsets(vector<int> &nums)
    {
        vector<vector<int>> result;
        int n = nums.size();

        for (int mask = 0; mask < 1 << n; mask++)
        {
            vector<int> subset;
            for (int i = 0; i < n; i++)
            {
                if (mask & (1 << i))
                    subset.push_back(nums[i]);
            }
            result.push_back(subset);
        }

        return result;
    }
};
// @lc code=end

/*
 * @lc app=leetcode id=78 lang=cpp
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (81.05%)
 * Likes:    18465
 * Dislikes: 318
 * Total Accepted:    2.6M
 * Total Submissions: 3.2M
 * Testcase Example:  '[1,2,3]'
 *
 * Given an integer array nums of unique elements, return all possible subsets
 * (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in
 * any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 *
 *
 */
