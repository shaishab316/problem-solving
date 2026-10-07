class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mp = {")": "(", "}": "{", "]": "["}

        for c in s:
            if c in mp:
                top = stack.pop() if stack else "#"
                if top != mp[c]:
                    return False
            else:
                stack.append(c)

        return not stack
