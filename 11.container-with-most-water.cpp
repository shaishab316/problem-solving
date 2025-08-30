#include <bits/stdc++.h>
using namespace std;

// @lc code=start
class Solution
{
public:
    int maxArea(vector<int> &heights)
    {
        int maxWater = 0, lp = 0, rp = heights.size() - 1;

        while (lp < rp)
        {
            int width = rp - lp;
            int height = min(heights[lp], heights[rp]);
            int currWater = width * height;

            maxWater = max(currWater, maxWater);

            heights[lp] < heights[rp] ? lp++ : rp--;
        }

        return maxWater;
    }
};
// @lc code=end

/*
! Brute Force Solution

class Solution
{
public:
    int maxArea(vector<int> &heights)
    {
        int maxWater = 0;

        for (int i = 0; i < heights.size(); i++)
        {
            for (int j = i + 1; j < heights.size(); j++)
            {
                int width = j - i;
                int height = min(heights[i], heights[j]);
                int currWater = width * height;

                maxWater = max(maxWater, currWater);
            }
        }

        return maxWater;
    }
};
*/

/*
 * @lc app=leetcode id=11 lang=cpp
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (57.93%)
 * Likes:    32074
 * Dislikes: 2059
 * Total Accepted:    4.4M
 * Total Submissions: 7.5M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * You are given an integer array height of length n. There are n vertical
 * lines drawn such that the two endpoints of the i^th line are (i, 0) and (i,
 * height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the
 * container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 *
 * Example 1:
 *
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array
 * [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the
 * container can contain is 49.
 *
 *
 * Example 2:
 *
 *
 * Input: height = [1,1]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 *
 *
 */
