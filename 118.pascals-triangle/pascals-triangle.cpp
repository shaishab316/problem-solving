#include <bits/stdc++.h>
using namespace std;

// @lc code=start
class Solution
{
public:
    vector<vector<int>> generate(int numRows)
    {
        vector<vector<int>> triangle;

        if (!numRows)
            return triangle;

        triangle.push_back({1}); // init

        for (int row = 1; row < numRows; ++row)
        {
            vector<int> current_row(row + 1, 1);
            const vector<int> &prev_row = triangle.back();

            for (int col = 1; col <= row / 2; ++col)
            {
                current_row[col] = prev_row[col - 1] + prev_row[col];
                if (col != row - col)
                    current_row[row - col] = current_row[col]; // mirror
            }

            triangle.push_back(move(current_row));
        }

        return triangle;
    }
};
// @lc code=end

/*
 * @lc app=leetcode id=118 lang=cpp
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (77.16%)
 * Likes:    14294
 * Dislikes: 534
 * Total Accepted:    2.3M
 * Total Submissions: 3M
 * Testcase Example:  '5'
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= numRows <= 30
 *
 *
 */
