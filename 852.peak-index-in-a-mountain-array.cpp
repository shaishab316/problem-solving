#include <bits/stdc++.h>
using namespace std;

// @lc code=start
class Solution
{
public:
    int peakIndexInMountainArray(vector<int> &arr)
    {
        int st = 1, end = arr.size() - 2;

        while (st <= end)
        {
            int mid = st + (end - st) / 2;

            if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid])
            {
                return mid;
            }
            else if (arr[mid - 1] < arr[mid])
            {
                st = mid + 1;
            }
            else
            {
                end = mid - 1;
            }
        }

        return -1;
    }
};
// @lc code=end

/*
 * @lc app=leetcode id=852 lang=cpp
 *
 * [852] Peak Index in a Mountain Array
 *
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
 *
 * algorithms
 * Medium (67.30%)
 * Likes:    8204
 * Dislikes: 1938
 * Total Accepted:    1.1M
 * Total Submissions: 1.6M
 * Testcase Example:  '[0,1,0]'
 *
 * You are given an integer mountain array arr of length n where the values
 * increase to a peak element and then decrease.
 *
 * Return the index of the peak element.
 *
 * Your task is to solve it in O(log(n)) time complexity.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [0,1,0]
 *
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: arr = [0,2,1,0]
 *
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: arr = [0,10,5,2]
 *
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= arr.length <= 10^5
 * 0 <= arr[i] <= 10^6
 * arr is guaranteed to be a mountain array.
 *
 *
 */
