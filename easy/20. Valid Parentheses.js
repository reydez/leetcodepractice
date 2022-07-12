var isValid = (s) => {
  const stack = [];
  const pairs = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] === pairs[s[i]]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return !stack.length;
};

console.log(isValid("()[]{}"));
