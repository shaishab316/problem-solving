class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        stack = []
        result = []

        for c in s:
            if c == ")":
                stack.pop()

            # have something in outer
            if stack:
                result.append(c)

            if c == "(":
                stack.append("(")

        return "".join(result)
