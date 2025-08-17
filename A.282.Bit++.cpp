#include <bits/stdc++.h>
using namespace std;

#define endl '\n'
#define ll long long

int main()
{
  int t;
  cin >> t;

  int count = 0;

  while (t--)
  {
    string input;
    cin >> input;

    if (input == "x++" || input == "++x" || input == "X++" || input == "++X")
    {
      count++;
    }
    else
      count--;
  }

  cout << count << endl;

  return 0;
}