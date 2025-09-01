#include "bits/stdc++.h"
using namespace std;

//! using Boyer moor's voting algorithm
// @lc code=start
class Solution
{
public:
    int majorityElement(vector<int> &nums)
    {
        int freq = 1, num = nums[0];

        for (int i = 1; i < nums.size(); i++)
        {
            if (!freq)
                num = nums[i];
            if (num == nums[i])
                freq++;
            else
                freq--;
        }

        return num;
    }
};
// @lc code=end

/*
 * @lc app=leetcode id=169 lang=cpp
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (65.84%)
 * Likes:    21601
 * Dislikes: 763
 * Total Accepted:    4.7M
 * Total Submissions: 7.1M
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */
