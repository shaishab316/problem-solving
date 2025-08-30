#include <bits/stdc++.h>
using namespace std;

// @lc code=start
class Solution
{
private:
    map<string, string> urls;
    int n = 1;

public:
    // Encodes a URL to a shortened URL.
    string encode(string longUrl)
    {
        string newUrl = "http://tinyurl.com/" + to_string(n++);
        urls[newUrl] = longUrl;
        return newUrl;
    }

    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl)
    {
        return urls[shortUrl];
    }
};
// @lc code=end

/*
 * @lc app=leetcode id=535 lang=cpp
 *
 * [535] Encode and Decode TinyURL
 *
 * https://leetcode.com/problems/encode-and-decode-tinyurl/description/
 *
 * algorithms
 * Medium (86.39%)
 * Likes:    2097
 * Dislikes: 3811
 * Total Accepted:    292.7K
 * Total Submissions: 338.7K
 * Testcase Example:  '"https://leetcode.com/problems/design-tinyurl"'
 *
 * Note: This is a companion problem to the System Design problem: Design
 * TinyURL.
 *
 * TinyURL is a URL shortening service where you enter a URL such as
 * https://leetcode.com/problems/design-tinyurl and it returns a short URL such
 * as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a
 * tiny URL.
 *
 * There is no restriction on how your encode/decode algorithm should work. You
 * just need to ensure that a URL can be encoded to a tiny URL and the tiny URL
 * can be decoded to the original URL.
 *
 * Implement the Solution class:
 *
 *
 * Solution() Initializes the object of the system.
 * String encode(String longUrl) Returns a tiny URL for the given longUrl.
 * String decode(String shortUrl) Returns the original long URL for the given
 * shortUrl. It is guaranteed that the given shortUrl was encoded by the same
 * object.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: url = "https://leetcode.com/problems/design-tinyurl"
 * Output: "https://leetcode.com/problems/design-tinyurl"
 *
 * Explanation:
 * Solution obj = new Solution();
 * string tiny = obj.encode(url); // returns the encoded tiny url.
 * string ans = obj.decode(tiny); // returns the original url after decoding
 * it.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= url.length <= 10^4
 * url is guranteed to be a valid URL.
 *
 *
 */
