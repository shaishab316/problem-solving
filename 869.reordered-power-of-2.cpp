#include <bits/stdc++.h>
using namespace std;

// @lc code=start
class Solution
{
public:
    bool reorderedPowerOf2(int n)
    {
        vector<int> countDigit = countDigits(n);

        for (int i = 1; i <= 1e9; i <<= 1)
        {
            if (countDigit == countDigits(i))
                return true;
        }

        return false;
    }

private:
    vector<int> countDigits(int num)
    {
        vector<int> count(10, 0);

        while (num > 0)
        {
            count[num % 10]++;
            num /= 10;
        }

        return count;
    }
};
// @lc code=end

/*
 * @lc app=leetcode id=869 lang=cpp
 *
 * [869] Reordered Power of 2
 *
 * https://leetcode.com/problems/reordered-power-of-2/description/
 *
 * algorithms
 * Medium (62.14%)
 * Likes:    2294
 * Dislikes: 460
 * Total Accepted:    150K
 * Total Submissions: 235.4K
 * Testcase Example:  '1'
 *
 * You are given an integer n. We reorder the digits in any order (including
 * the original order) such that the leading digit is not zero.
 *
 * Return true if and only if we can do this so that the resulting number is a
 * power of two.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 1
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: n = 10
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^9
 *
 *
 */
