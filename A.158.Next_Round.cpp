#include <bits/stdc++.h>
using namespace std;

#define endl '\n'
#define ll long long

int main()
{
  int n, k;
  cin >> n >> k;

  vector<int> scores(n);
  for (int i = 0; i < n; i++)
    cin >> scores[i];

  int threshold = scores[k - 1];
  int count = 0;

  for (int score : scores)
  {
    if (score >= threshold && score > 0)
    {
      count++;
    }
  }

  cout << count << endl;

  return 0;
}