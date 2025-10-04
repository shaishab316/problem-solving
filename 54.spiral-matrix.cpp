#include <bits/stdc++.h>
using namespace std;

// @lc code=start
class Solution
{
public:
    vector<int> spiralOrder(vector<vector<int>> &matrix)
    {
        int m = matrix.size(), n = matrix[0].size();
        int srow = 0, scol = 0, erow = m - 1, ecol = n - 1;
        vector<int> ans;

        while (srow <= erow && scol <= ecol)
        {
            // Top row
            for (int j = scol; j <= ecol; j++)
                ans.push_back(matrix[srow][j]);

            // Right col
            for (int i = srow + 1; i <= erow; i++)
                ans.push_back(matrix[i][ecol]);

            // Bottom row
            if (srow < erow)
                for (int j = ecol - 1; j >= scol; j--)
                    ans.push_back(matrix[erow][j]);

            // Left col
            if (scol < ecol)
                for (int i = erow - 1; i > srow; i--)
                    ans.push_back(matrix[i][scol]);

            srow++;
            erow--;
            scol++;
            ecol--;
        }

        return ans;
    }
};

// @lc code=end

/*
 * @lc app=leetcode id=54 lang=cpp
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (54.74%)
 * Likes:    16698
 * Dislikes: 1500
 * Total Accepted:    2.1M
 * Total Submissions: 3.8M
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 * Constraints:
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 *
 *
 */
