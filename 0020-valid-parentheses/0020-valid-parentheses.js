function isValid(s) {
  const stack = [];
  const bracketMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of s) {
    if (bracketMap[char]) {
      stack.push(bracketMap[char]);
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}