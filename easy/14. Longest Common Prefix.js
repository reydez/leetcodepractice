var longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  var prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.trim() === "") return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
