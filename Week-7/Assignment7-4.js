/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length == 0) {
    return true
  }
  if (s.length % 2 != 0)
    return false;
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  const stack = [];

  for (const paran of s) {
    if (obj.hasOwnProperty(paran)) {
      stack.push(paran)
    } else {
      const closeParan = stack.pop();
      if (paran !== obj[closeParan]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(isValid("{{[]}}"));