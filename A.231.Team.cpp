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
    int petya, vasya, tonya;
    cin >> petya >> vasya >> tonya;

    if ((petya + vasya + tonya) >= 2)
    {
      count++;
    }
  }

  cout << count << endl;

  return 0;
}
