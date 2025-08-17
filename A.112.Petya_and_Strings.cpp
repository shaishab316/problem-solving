#include <bits/stdc++.h>
using namespace std;

#define endl '\n'

int main()
{
  string s1, s2;
  cin >> s1 >> s2;
  char l1, l2;

  for (int i = 0; i < s1.size(); i++)
  {
    l1 = toupper(s1[i]);
    l2 = toupper(s2[i]);

    if (l1 == l2)
      continue;
    else if (l1 < l2)
    {
      cout << -1 << endl;
      break;
    }
    else
    {
      cout << 1 << endl;
      break;
    }
  }

  if (l1 == l2)
    cout << 0 << endl;

  return 0;
}

/*

A. Petya and Strings
https://codeforces.com/problemset/problem/112/A?csrf_token=69d91b7c4101fda74d00f62498fa8b6b

Little Petya loves presents. His mum bought him two strings of the same size for his birthday. The strings consist of uppercase and lowercase Latin letters. Now Petya wants to compare those two strings lexicographically. The letters' case does not matter, that is an uppercase letter is considered equivalent to the corresponding lowercase letter. Help Petya perform the comparison.

Input
Each of the first two lines contains a bought string. The strings' lengths range from 1 to 100 inclusive. It is guaranteed that the strings are of the same length and also consist of uppercase and lowercase Latin letters.

Output
If the first string is less than the second one, print "-1". If the second string is less than the first one, print "1". If the strings are equal, print "0". Note that the letters' case is not taken into consideration when the strings are compared.

Examples
Input
aaaa
aaaA
Output
0

Input
abs
Abz
Output
-1

Input
abcdefg
AbCdEfF
Output
1

Note :
If you want more formal information about the lexicographical order (also known as the "dictionary order" or "alphabetical order"), you can visit the following site:

http://en.wikipedia.org/wiki/Lexicographical_order


*/